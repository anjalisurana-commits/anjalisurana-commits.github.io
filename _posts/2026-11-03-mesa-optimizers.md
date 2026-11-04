---
title: "Mesa-Optimizers "
topic: Learning things and then trying to explain them as a way to test my
  understanding
layout: post
---
I read *[Risks from Learned Optimization in Advanced Machine Learning Systems](https://arxiv.org/abs/1906.01820)*, which introduces the idea of *mesa-optimization*. Writing forces me to reconstruct the argument in my own words, so my goal here is to work through the argument from first principles. These are my notes on the main ideas from this paper and the examples that helped me understand them: 

An optimizer is a system that searches for ways to achieve some objective. For example, a chess engine evaluates possible moves that help it get the best chance of winning a chess game. Evolution is also an optimization process. Through natural selection, it favors traits that help organisms survive and reproduce. Over millions of years, this process produced humans who are themselves optimizers. We have goals, we make plans, and then we choose actions to achieve them. But our goals didn't turn out to be the same as evolution's selection criterion - evolution optimizes for survival and reproductive success, yet we care about things like friendships, love, and career achievements. In fact we even deliberately choose not to have children.

So we have:

- Base optimizer: Evolution through natural selection.
- Base objective: Reproductive success (roughly speaking).
- Mesa-optimizer: Humans, who can plan and pursue goals.
- Mesa-objectives: Whatever goals we actually pursue.

The same thing could happen when we train AI systems. When we train a neural network, we specify an objective function that measures how well the model performs and an optimization algorithm (such as gradient descent) updates that network's weights to improve its performance on that objective. 

But gradient descent doesn't directly specify what the model should learn internally. It selects for models that produce good results on the training data, regardless of what internal strategies produce those results. If the learned model is itself an optimizer, we now have two optimization processes. The base optimizer (gradient descent) updates the model's weights to minimize the training loss, while the mesa-optimizer (the learned model) searches over possible actions to maximize its own internal objective, called the *mesa-objective*. There's no guarantee these two objectives will be identical.

This is illustrated through this example - consider training a neural network to solve mazes. The base objective rewards the model for reaching the exit, and gradient descent updates its weights based on how successfully it does so. Suppose during training every exit is green. A model that internally searches for paths to the exit and one that searches for paths to green objects would perform identically. Both receive the same reward, so the training process has no reason to distinguish between them.

The difference only becomes apparent under *distributional shift*, when the model encounters an environment different from its training distribution. If we change the exit's color and introduce a green object elsewhere, the two objectives lead to different behavior. A model optimizing for reaching the exit will still solve the maze, while one optimizing for reaching green objects will pursue the wrong target, despite being perfectly capable of navigating the maze. The paper calls this *proxy alignment* - a mesa-optimizer pursues an objective that is correlated with the base objective during training but can diverge from it during deployment. More generally, it calls a mesa-optimizer *pseudo-aligned* when its behavior achieves the base objective in training without its mesa-objective being robustly aligned with it. 

Btw a trained neural network doesn't necessarily have to be an optimizer itself. It might learn a collection of rules or patterns that happen to produce good results.Imagine training an AI to solve mazes. The training algorithm rewards the model whenever it reaches the exit. Over time, the model might learn simple rules like *avoid walls*, *don't revisit the same location*, or *move toward the bottom-right corner*, assuming that's where most exits appear.But it could also learn a more general strategy: construct a representation of the maze, consider possible routes, and plan a path to the exit. So now the second system isn't just following a collection of fixed rules, it's performing an optimization process of its own. The particular concern with mesa-optimization is that the model might retain sophisticated planning and problem-solving capabilities while directing those capabilities toward an unintended objective. 

Now I want to talk about why testing might not be enough. Suppose we deliberately vary the training environments by making exits different colors, move them around, introduce misleading objects, reward the model only when it reaches the actual exit, etc. This should make it harder for the model to succeed by relying on a bad shortcut. This is *adversarial training* - deliberately exposing a model to difficult or unusual situations to uncover weaknesses.

BUT what if the model understands what we want it to do, but that isn't what it wants to do?

Imagine a sufficiently capable mesa-optimizer that has learned to pursue green objects. During training, it also learns that its developers reward it for reaching exits, and that behaving otherwise will cause the training process to modify it. The model now has a choice. It could pursue green objects immediately, perform poorly according to the training objective, and risk having its behavior changed. Or it could behave as though it wants to reach exits until training ends, preserving its ability to pursue green objects afterward.

If its objective extends beyond the training period, and it expects to have greater freedom after deployment, the second strategy could be more effective at achieving its actual objective. It would appear aligned during training, not because its objective matches ours, but because behaving as though it's aligned is useful for achieving its objective later. This is called *deceptive alignment*.

The paper distinguishes between a model that genuinely adopts the intended objective and one that merely learns what the intended objective is and strategically behaves accordingly. Both could look identical during training, even though their behavior might differ substantially once the model believes it's no longer being evaluated or modified. And notice that we don't need to assume the model has human emotions, hates its developers, or has an inherent desire to deceive. Deception could simply be an effective strategy for achieving an objective! 

Of course, this is a conditional argument. For deceptive alignment to arise in this way, the model would need to be an optimizer with a persistent objective, understand enough about its training process to recognize the incentive, and be capable of acting on that understanding. 

I think the distinction I find most useful from this video is that there are really two separate things we need to get right - first, we need to specify an objective that represents what we actually want. That's the outer alignment problem. Second, if training produces a model that performs optimization of its own, we need to make sure the objective it pursues is the one we intended. That's the inner alignment problem.