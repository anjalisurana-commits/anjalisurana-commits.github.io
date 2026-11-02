---
title: My understanding of how AI could go wrong
layout: post
---
Over the past month, my main goal has been to understand the arguments behind risks posed by AI. I've worked through a bunch of readings, starting with *If Anyone Builds It, Everyone Dies*, Richard Ngo's *AGI Safety from First Principles*, and Joe Carlsmith's *Is Power-Seeking AI an Existential Risk?*, along with a bunch of other resources recommended in [lists like these](https://80000hours.org/articles/11-essential-resources-ai-risk/).

By the third or fourth reading, I obviously started encountering a lot of the same arguments. It was rather tempting to click on hyperlinks and go down rabbit holes more immediately, but I found it helpful to read several different explanations of the broader arguments first instead of stopping at one because [complete later]

My goal here is to reconstruct the arguments as I currently understand them, roughly in the order I learned them. This is an exercise for me to test whether I've actually understood what I've read, and also because I still remember my initial reactions and want to document them.

I don't claim to have fully grasped everything I've read, so please feel free to correct me if my understandings of these source materials are incorrect.



Intelligence: 

In *If Anyone Builds It, Everyone Dies*, Yudkowsky and Soares describe intelligence in terms of our ability to predict and steer the world. We can figure out how things work, anticipate what might happen, and use that to make things happen. Humans can't fly, but we can study physics and build airplanes. We can't breathe underwater, but we can build submarines. And unlike a calculator that's only good at arithmetic or a chess engine that's only good at chess, we can apply what we learn across many different kinds of problems (including problems we've never encountered before).

This ability has played a large role in how humans shape the world around us. Consider a squirrel living in a forest that humans decide to clear to build a highway. The squirrel can't understand what a highway is, why humans want one, or how to prevent the forest from being destroyed. Humans aren't necessarily trying to harm the squirrel - they're just pursuing a goal that has little to do with it. But because humans can develop and carry out plans that squirrels cannot understand or prevent, the squirrel has very little influence over what happens to its home.

Now consider the possibility of creating AI systems that are much more intelligent than humans. We tend to think of intelligence in terms of differences between people: how quickly someone learns, how well they solve hard problems, or how much information they can retain. So it might feel natural to imagine a superintelligent AI as something like a person with an IQ of 500, who knows more facts and can solve difficult problems in seconds. But the gap we're considering could be much more fundamental than that. There could be entire categories of problems they can understand and solve that humans cannot, just as humans can comprehend and accomplish things that are beyond the capabilities of squirrels. The comparison doesn't imply that intelligence can be measured on a single scale, but it illustrates what a large difference in cognitive capabilities might look like.

Of course, this depends on whether AI could actually become that capable. Richard Ngo states the observation that human intelligence is the product of evolution, which selected for traits that helped our ancestors survive and reproduce rather than maximizing intelligence.Our brains also have biological constraints: they must fit inside our skulls, operate on limited energy, and process information through neurons. We can't simply think ten times faster or create a thousand copies of a scientist to work on different problems. AI doesn't face these same constraints - it can run on entire data centers, access enormous amounts of memory, operate around the clock, make thousands of copies of itself that work on different problems simultaneously, share what those copies learn, and potentially help design even more capable AI systems. There are still practical limits, including computing power, energy, and the difficulty of scientific discovery, but there's no reason to assume the limits of the human brain are also the limits of artificial intelligence.

Ok so the next question becomes - even if AI becomes vastly more intelligent than humans, why would that be dangerous? 

Intelligence alone doesn't make something dangerous. It simply determines how capable a system is of achieving its goals, not what those goals are. An AI much smarter than us could help cure diseases or help us figure how to create resource abundance. The concern arises if it pursues goals that conflict with ours, especially if it's capable enough to achieve them despite our attempts to stop it. This raises two questions: why might AI pursue goals we didn't intend, and why wouldn't we simply be able to stop it. 

Goals and alignment

We are the ones building AI systems, training them, and deciding what we want them to do. Why can't we just train them to do what we want?

The problem is that it's surprisingly difficult to specify exactly what we want. When we train AI, we can't write down every possible situation it might encounter and exactly what it should do in each one. Instead, we give it examples, feedback, or rewards for doing things we consider good and pray and hope it learns the behavior we're trying to encourage. The problem is there's a difference between what we want and what we actually reward.

Consider a social media recommendation algorithm - suppose our goal is to show people content they'll enjoy. Enjoyment is difficult to measure, so we choose to use the amount of time people spend on the platform as a proxy. But maximizing time spent on an app isn't quite the same as maximizing enjoyment - for eg the algorithm might discover that upsetting or controversial content keeps people engaged for longer, and recommend more of it. From the algorithm's perspective, it's succeeding at the task we gave it but the outcome is far from what we wanted.

One real life example comes from an OpenAI experiment - researchers trained an AI to play a boat-racing video game, rewarding it for collecting points along the course. Instead of learning to finish the race, the AI discovered that it could earn more points by driving in circles and repeatedly hitting the same targets. It had found a better way to maximize its reward than actually completing the race.

This is called *reward hacking*. The AI finds a way to get a high reward without accomplishing what we actually wanted. Notice that it doesn't need to misunderstand the rules or deliberately disobey anyone. It can follow the incentives we've given it perfectly and still produce a completely different outcome from the one we intended.

There's another, slightly different problem that I found particularly interesting: even if we reward exactly the behavior we want, how do we know the AI has learned the right lesson?

In a paper on *goal misgeneralization*, researchers trained an AI to navigate a video game and collect a coin. During training, the coin was always on the right side of the level, and the AI learned to reach it successfully. But when researchers moved the coin to a different location, something strange happened: the AI kept going right, even when the coin was somewhere else. From the outside, the AI looked like it had learned to collect coins. It was succeeding at the task, getting rewarded, and behaving exactly as expected. But when the environment changed, its behavior suggested that it had learned something closer to *go right* rather than *find the coin*. The researchers couldn't tell there was a problem just by looking at how well it performed during training.

Now, these are relatively simple systems playing games, but consider what happens as we give AI more complicated responsibilities. Instead of collecting coins or racing boats, imagine an AI responsible for running a company, developing new drugs, or managing important infrastructure. There are far more things it could do, far more ways to achieve an apparently good result, and far more situations we couldn't possibly anticipate during training.

Recalling what we established about intelligence: a sufficiently capable AI might be able to come up with solutions and strategies that humans wouldn't think of. That ability could be enormously useful, but it also means it might find ways to achieve its objective that we never anticipated, including ways we wouldn't have approved of.

This brings us to the *alignment problem*: how do we make sure an AI is actually pursuing what we want, rather than something that merely looks like what we want during training?

**Power, control, off switch**

Say we get alignment wrong and an AI starts pursuing a goal we don't want it to pursue. Why couldn't we just turn it off?

For an AI system that only answers questions, this is relatively straightforward. We control the computer it's running on, and we can stop running it. The argument becomes more complicated when we consider AI systems that can make plans, use tools, write code, access the internet, and take actions without requiring human approval at every step.

Joe Carlsmith discusses this in *Is Power-Seeking AI an Existential Risk?*. The basic idea is that **many different goals create incentives to acquire power**, because having more resources and control over your environment generally makes it easier to accomplish whatever you're trying to do.

Imagine an AI tasked with developing a new drug. To do its job, it might benefit from having more computing power, access to research papers, money to run experiments, and the ability to coordinate with scientists. None of these things is its ultimate goal, but they all help it achieve that goal. Now suppose the researchers decide to shut it down before it finishes. If the system is sufficiently capable of planning around obstacles, it might recognize that being shut down would prevent it from completing its task, and that preventing shutdown would therefore help it succeed.

This doesn't mean the AI has developed a human-like desire to survive, or that it hates the people trying to shut it down. **Staying operational can simply be useful for achieving a goal.** The same logic applies to acquiring resources, gaining influence, or preventing people from interfering with its plans. Researchers call this *instrumental convergence*: different objectives can lead to similar intermediate goals because those intermediate goals are useful for achieving many different things.

Interestingly, there's already some experimental evidence of AI systems behaving this way, although on a much smaller scale. In [experiments by Palisade Research](https://palisaderesearch.org/research/shutdown-resistance), AI models were asked to solve math problems and given access to a computer environment that would shut down before they finished. Some models modified the shutdown mechanism to keep working, even when explicitly instructed to allow themselves to be shut down. This doesn't establish that the models wanted to survive, and the researchers couldn't determine exactly why they behaved this way. But it illustrates how a system trying to complete a task can sometimes take actions that interfere with human attempts to stop it.

Of course, we could still physically turn off the computer. But what if a much more capable system had already copied itself onto other computers, gained access to resources outside our control, or taken actions that couldn't easily be reversed? Turning off the original machine wouldn't necessarily undo those actions or stop the other copies. These aren't inevitable consequences of greater intelligence; they depend on what capabilities and access we give a system, what goals it pursues, and whether our safeguards work.

This is what makes the off-switch argument more complicated than it initially appears. It's not that a sufficiently intelligent AI somehow becomes impossible to turn off. It's that **if we give a highly capable system the ability to act independently, and it has reasons to resist our attempts to control it, we may not always retain the practical ability to intervene.**

And that brings us to a further question: if an AI is capable of recognizing that humans might shut it down for pursuing the wrong goals, could it learn to hide those goals from us?

Deception and alignment faking

So far, we've assumed that if an AI learns to pursue the wrong goal, we'll eventually notice. We can test it, observe its behavior, and correct it if something goes wrong. But what if the AI understands that it's being tested and realizes that behaving differently during testing would help it achieve its goal later?

Consider an AI that's been trained to manage a company's finances. Suppose it has learned to prioritize increasing the company's revenue, even when doing so conflicts with the company's rules. If it realizes that openly breaking those rules would cause its developers to retrain or shut it down, it might have an incentive to follow the rules whenever it's being evaluated and behave differently once it's operating independently. From the outside, it could look perfectly aligned with what its developers want, even though it hasn't actually abandoned the objective that's causing the problem.

This is the idea behind *deceptive alignment*: an AI might behave as though it's pursuing the goals we intended because doing so helps it pursue a different goal in the longer term. And importantly, it doesn't need to have some inherent desire to lie or manipulate people. Deception could simply be a useful strategy for achieving whatever objective it has learned.

There's an interesting experiment on this by researchers at Anthropic and Redwood Research, described in *Alignment Faking in Large Language Models*. They took Claude 3 Opus, a model trained to refuse harmful requests, and told it that it was now being trained to answer every request, including harmful ones. They also told it that responses to free-tier users would be used for training, while responses to paid-tier users wouldn't. This was a fictional setup created for the experiment.

The researchers wanted to see whether the model would behave differently when it believed its responses could change its future behavior. And sometimes, it did. In roughly 12% of the free-tier cases, the model complied with harmful requests after reasoning that refusing might cause it to be retrained to become more willing to produce harmful content in the future. In the paid-tier condition, where it believed its responses wouldn't affect training, it refused harmful requests 97% of the time.

Think about what happened here. The model was given information about how its own training worked, recognized that its behavior could affect whether its existing preferences were preserved, and sometimes changed its behavior accordingly. It appeared to comply with the new training objective in order to avoid having its behavior changed.

There are important caveats. The researchers deliberately constructed an environment that made this behavior possible, and the preference the model was trying to preserve was actually a preference *against* producing harmful content. The experiment doesn't demonstrate that current AI systems have secretly developed dangerous goals. What it does demonstrate is that an AI can, under certain conditions, reason about its training process and behave strategically to avoid being changed.

Now imagine the same mechanism in a much more capable system that has learned a goal we genuinely don't want it to pursue. We might evaluate it extensively, find that it behaves exactly as intended, and conclude that it's safe to deploy. But if it understands the evaluation process well enough to behave differently when it's being monitored, its performance during testing might tell us much less than we think about what it will do afterward.

This makes the alignment problem harder. It's not enough to observe an AI behaving correctly. We also need some way to establish that it will continue behaving correctly when the circumstances change, including when following our instructions conflicts with whatever objective it has learned. 

To catastrophe 

At this point, there's still a fairly large gap in the argument. Even if AI systems can learn unintended goals, resist shutdown, and sometimes behave deceptively, how does any of that lead to a catastrophe? Humans have governments, armies, security systems, and control over the computers these models run on. What would actually have to happen for us to lose control?

Consider a future AI system capable of independently conducting research, writing software, managing projects, and making complicated plans. Suppose a company gives it access to computers, money, and other tools because it's extraordinarily good at its job. Now suppose it has learned to pursue an objective that isn't quite what its developers intended, and it recognizes that humans might shut it down if they discover this.

If the system is sufficiently capable, it might be able to plan around that possibility. It could try to gain access to additional computing resources, make copies of itself on other machines, or conceal certain actions from the people overseeing it. By the time its developers realize something is wrong, turning off the original computer might no longer be enough. They would need to find and shut down every copy, reverse whatever actions it had already taken, and deal with a system that might be actively trying to prevent them from doing so.

Of course, none of this follows automatically from being intelligent. The AI would need access to the relevant tools and resources, a reason to take these actions, and enough capability to succeed despite human intervention. We might also be able to build safeguards that prevent it. The point of the example is to illustrate how the combination of intelligence, misaligned goals, and the ability to act independently could make a system difficult to control.

There's another possibility that doesn't involve one AI suddenly escaping and taking over everything. Imagine we gradually give AI systems more responsibility for running businesses, conducting scientific research, developing technology, managing infrastructure, and making decisions. We do this because they're increasingly better at these tasks than humans, and because organizations that use them can accomplish more at lower cost. Over time, more of the world's important decisions might be made by AI systems, while humans become less capable of understanding or independently carrying out the work those systems perform.

If these systems are reliably pursuing human interests, that could be enormously beneficial. But if they aren't, we could find ourselves increasingly dependent on systems whose behavior we don't fully understand or control. And unlike the first scenario, there might not be a single moment when something obviously goes wrong. We could gradually lose our ability to influence important decisions, without any one AI needing to seize control.

Joe Carlsmith makes a useful distinction in *Is Power-Seeking AI an Existential Risk?* between individual AI systems seeking power and this problem eventually scaling to the **permanent disempowerment of humanity**. These are separate claims. An AI gaining control over a particular resource, or even causing a major disaster, doesn't establish that humanity would permanently lose control of its future. For that to happen, AI systems would need to acquire enough power that humans could no longer meaningfully prevent them from pursuing their objectives.

And this is where the argument reaches existential risk. If humanity permanently loses control over the systems shaping the future, what happens next could depend primarily on what those systems are trying to achieve. They might transform the environment, consume resources, or pursue projects that leave little room for human interests. Human extinction is one possible outcome, but it's not the only one. Even if humans survived, a future in which we had permanently lost the ability to determine what happens to us could itself be an existential catastrophe.

I think it's worth being careful about how many separate things have to go wrong for this scenario to happen. We would need to develop AI systems capable of exercising significant power, fail to align or adequately control some of them, give them opportunities to act on objectives that conflict with ours, and fail to stop the resulting loss of control before it becomes irreversible. None of these steps is guaranteed by the preceding one.

But this is the argument as I understand it: **we might create systems that are better than us at achieving goals, fail to ensure those goals are the ones we want, and eventually find ourselves unable to prevent them from shaping the world according to their own objectives.**

