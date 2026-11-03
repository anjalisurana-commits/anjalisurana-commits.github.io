---
title: My understanding of how AI could go wrong
layout: post
---
### Preface

Over the past month, my main goal has been to understand the arguments behind risks posed by AI. I've worked through a bunch of readings, starting with *[If Anyone Builds It, Everyone Dies](https://ifanyonebuildsit.com/)* by Eliezer Yudkowsky and Nate Soares, Richard Ngo's *[AGI Safety from First Principles](https://www.alignmentforum.org/s/mzgtmmTKKn5MuCzFJ)*, and Joe Carlsmith's *[Is Power-Seeking AI an Existential Risk?](https://arxiv.org/abs/2206.13353)*, along with a bunch of other resources recommended in [lists like these](https://80000hours.org/articles/11-essential-resources-ai-risk/).

By the third or fourth reading, I obviously started encountering a lot of the same arguments. It was rather tempting to click on hyperlinks and go down rabbit holes more immediately, but I found it helpful to read several different explanations instead of stopping at one (and I highly recommend it to anyone starting out with little to no context like I was). Often something I hadn't fully understood in one explanation would *click* when I read it explained in different words in another. Joe Rocca's *[Some notes on solving hard problems](https://www.lesswrong.com/posts/AcbtSuGYB4jWGYk6x/some-notes-on-solving-hard-problems)* explains this well.

My goal here is to reconstruct these arguments in some of my own words, roughly in the order I learned them, to test whether I've actually understood them. I liked this post [about learning how to explain things](https://www.lesswrong.com/posts/99mHEgk2NAk2eveZE/learning-how-to-explain-things) and the idea that understanding something and being able to explain it clearly aren't quite the same thing. I also have fresh memory of which parts confused me initially, and I want to document those reactions before they become obvious in hindsight.

I don't claim to have fully grasped everything I've read, so please correct me if I've misunderstood or misrepresented any of the arguments.

### **Intelligence:**

Yudkowsky and Soares describe intelligence in terms of our ability to predict and steer the world. We can figure out how things work, and can use that to make things happen. For example: humans can't fly, but we can study physics and build airplanes. We can't breathe underwater, but we can understand how water pressure works and build submarines. And unlike a calculator that's only good at arithmetic or a chess engine that's only good at chess, we can apply what we learn across many different kinds of problems (including problems we've never encountered before). This ability (intelligence) has allowed us to shape our world. 

Consider a squirrel living in a forest that humans decide to clear to build a highway. The squirrel does not understand what a highway is, why humans want one, or how to prevent the forest from being destroyed. Humans aren't necessarily trying to harm the squirrel - we're just pursuing a goal and the harm to the squirrel is an unintended consequence. 

Now consider AI systems that are much more intelligent than humans. I suspect that when we think about intelligence, we tend to imagine a scale where the least intelligent person is at one end and the most intelligent person is at the other. But if AI becomes vastly more intelligent than humans, the gap could be so large that the entire range of human intelligence would occupy only a tiny fraction of the scale. There could be entire categories of problems AI can comprehend and accomplish that humans cannot, just as humans can comprehend and accomplish things that squirrels cannot. Ofc this doesn't imply that intelligence can be measured on a single scale, but I'm using this to illustrate what a large difference in cognitive capabilities might look like. 

Obviously, this depends on whether AI could actually become that capable. And that possibility exists. 

Richard Ngo states the observation that human intelligence is the product of evolution, which selected for traits that helped our ancestors survive and reproduce rather than maximizing for intelligence. Our brains also have biological constraints: they must fit inside our skulls, operate on limited energy, and process information through neurons. We can't just think ten times faster or create a thousand copies of our brain to work on different problems simultaneously. But AI does not face these same constraints - it can run on entire data centers, access enormous amounts of memory, operate around the clock, make thousands of copies, work on different problems at once, share what those copies learn, and help design even more capable AI systems. There are still practical limits including computing power, energy, and the difficulty of scientific discovery, but there's no reason to assume the limits of the human brain are also the limits of artificial intelligence.

So the next question becomes: even if AI gets vastly more intelligent than humans, why is that dangerous? You'd be right in thinking that intelligence alone doesn't make something dangerous (it determines how capable a system is of achieving its goals, not what those goals are). AI much smarter than us could possibly help us reverse aging or find new sources of clean energy or help us get to Mars. But the concern is if AI pursues *goals* that conflict with ours, and especially if it's capable enough to achieve them despite our attempts to stop it. This then raises two questions: (1) why might AI pursue goals we didn't intend, and (2) why wouldn't we simply be able to stop it?

### **Goals and alignment**

It is surprisingly difficult to specify exactly what we want. When we train AI, we can't write down every possible situation it might encounter and tell it exactly what it should do in each one. Instead, we give it examples, feedback, or rewards for doing things we consider good and pray and hope it learns the behavior we're trying to encourage. But in practice, there arises differences between what we want and what we actually reward. 

Here's an example - say we use an AI system in a hospital setting to improve patient care. The hospital wants to reduce the time patients spend waiting for treatment, so it rewards the AI for keeping waiting times low. The AI might discover that the easiest way to reduce wait times is to turn away patients with complicated conditions, since they generally take longer to treat. From the system's perspective, it's succeeding at the task we gave it, even though it's making healthcare worse for the patients who might need it most.

This is reward hacking - the AI finds a way to get a high reward without accomplishing what we actually intended. Note that it doesn't necessarily mean the AI misunderstood the rules or deliberately disobeyed anyone. It can very follow the incentives we've given it perfectly and still produce a completely different outcome from the one we intended.

Now say we figure a way to reward exactly the behavior we want. There's still another problem - how do we know for sure that the AI has learned the right lesson?

[In a paper on goal misgeneralization](https://proceedings.mlr.press/v162/langosco22a.html?utm_source=chatgpt.com), researchers trained an AI to navigate a video game and collect a coin. During training, the coin was always on the right side of the level, and the AI learned to reach it successfully. But when researchers moved the coin to a different location, the AI kept going right even when the coin was somewhere else. From the outside the AI looked like it had learned to collect coins. But when the environment changed, its behavior suggested that it had learned something closer to "go right" rather than "find the coin". And the researchers couldn't tell there was a problem just by looking at how well it performed during training.

Now, these are relatively simple systems playing games, but consider what happens as we give AI more complicated responsibilities. Recalling what we established about intelligence and how hard it is to reward specify and check: if the AI's goals aren't aligned with ours (humans prioritize transportation over the squirrel's home), it could cause harm without intending to (destroying the forest to build a highway), make plans we can't understand or predict (the squirrel doesn't understand what a highway is), and be so much more capable than us that we have little power to stop it (the squirrel can't prevent us cutting down the forests).

### Power, control, off switch

Ok so now let's say we get alignment wrong, and an AI starts pursuing a goal we don't want it to pursue. Why couldn't we just turn it off?

![](</media/Screenshot 2026-09-11 at 4.45.44 PM.png>)



Well, for an AI system that only answers questions, this is relatively straightforward, and the image above makes sense. We control the computer it's running on, and we can simply stop running it.

Now imagine an AI responsible for managing a city's electricity grid. Instead of simply recommending how to distribute electricity, we give it access to the grid's systems so it can make decisions and carry them out. It can monitor electricity usage, change how power is distributed, and respond to problems on its own. This is an example of an AI agent: a system that can make plans and take actions to achieve a goal.

Now suppose we've given this AI the goal of minimizing power outages. It might figure out that having control over more parts of the grid would help it do its job better. It'll want to access more information and computing resources, and maybe the ability to override certain decisions made by human operators. Notice that we never asked it to acquire more control, but having more control could help it achieve the goal we did give it. Now take that reasoning one step further. What if the AI realizes that humans are planning to switch it off? Being switched off would prevent it from continuing to minimize outages. So, if it's sufficiently capable of planning ahead, and hasn't been designed to accept shutdown, it might have a reason to prevent humans from switching it off.

This is the concern Joe Carlsmith explores in *Is Power-Seeking AI an Existential Risk?*. Many different goals can create incentives to acquire power, because having more resources and control over your environment often makes it easier to achieve whatever you're trying to do. This is called *instrumental convergence*: different goals can lead to similar intermediate goals.

Of course, none of this means that every AI agent will try to acquire power or resist being switched off. The concern is about sufficiently capable AI systems that can plan ahead, understand the advantages of having power, and pursue objectives that aren't adequately aligned with ours.

Interestingly, there's already some experimental evidence of AI systems behaving this way. In [experiments by Palisade Research](https://palisaderesearch.org/research/shutdown-resistance), AI models were asked to solve math problems and given access to a computer environment that would shut down before they finished. Some models modified the shutdown mechanism to keep working, even when explicitly instructed to allow themselves to be shut down.

Of course, we could still physically turn off the computer. But a much more capable system might already copy itself onto other computers or take actions that couldn't easily be reversed? Turning off the original machine wouldn't necessarily undo those actions or stop the other copies. This is what makes the off-switch argument more complicated than it initially appears. When we give a highly capable system the ability to act independently, and it has reasons to resist our attempts to control it, we may not always retain the practical ability to intervene. 

### Deception and alignment faking

Consider an AI that's been trained to manage a company's finances. Suppose it has learned to prioritize increasing the company's revenue, even when doing so conflicts with the company's rules. If it realizes that openly breaking those rules would cause its developers to retrain or shut it down, it might have an incentive to follow the rules whenever it's being evaluated and behave differently once it's operating independently. From the outside, it could look perfectly aligned with what its developers want, even though it hasn't actually abandoned the objective that's causing the problem.

This is *deceptive alignment*: an AI might behave as though it's pursuing the goals we intended because doing so helps it pursue a different goal in the longer term. It doesn't need to have some inherent desire to lie or manipulate people, deception could simply be a useful strategy for achieving whatever objective it has learned.

There's an interesting experiment on this by researchers at Anthropic and Redwood Research, described in *Alignment Faking in Large Language Models*. They took Claude 3 Opus, a model trained to refuse harmful requests, and told it that it was now being trained to answer every request, including harmful ones. They also told it that responses to free-tier users would be used for training, while responses to paid-tier users wouldn't. The researchers wanted to see whether the model would behave differently when it believed its responses could change its future behavior. In roughly 12% of the free-tier cases, the model complied with harmful requests after reasoning that refusing might cause it to be retrained to become more willing to produce harmful content in the future. In the paid-tier condition, where it believed its responses wouldn't affect training, it refused harmful requests 97% of the time.

What happened here is that the model was given information about how its own training worked, recognized that its behavior could affect whether its existing preferences were preserved, and sometimes changed its behavior accordingly. It appeared to comply with the new training objective in order to avoid having its behavior changed!

important caveats here are that the researchers deliberately constructed an environment that made this behavior possible, and the preference the model was trying to preserve was actually a preference *against* producing harmful content. But the same mechanism would apply in a capable system that has learned a goal we don't want it to pursue.

### Getting to catastrophe

Humans have governments, armies, security systems, and control over the computers these models run on. What would actually have to happen for us to lose control?

Imagine we gradually give AI systems more responsibility. We do this because they're increasingly better at these tasks than humans, and because organizations that use them can accomplish more at lower cost. Over time, more of the world's important decisions might be made by AI systems, while humans become less capable of understanding or independently carrying out the work those systems perform. If these systems are reliably pursuing human interests, that could be enormously beneficial. But if they aren't, we could find ourselves increasingly dependent on systems whose behavior we don't fully understand. And unlike the first scenario, there might not be a single moment when something obviously goes wrong. We could gradually lose our ability to influence important decisions, without any one AI needing to seize control.

Joe Carlsmith makes this useful distinction in *Is Power-Seeking AI an Existential Risk?* between individual AI systems seeking power and this problem eventually scaling to the permanent disempowerment of humanity. These are separate claims - an AI gaining control over a particular resource, or even causing a major disaster, doesn't establish that humanity would permanently lose control of its future. For that to happen, AI systems would need to acquire enough power that humans could no longer meaningfully prevent them from pursuing their objectives.

And this is where the argument reaches existential risk. If humanity permanently loses control over the systems shaping the future, what happens next could depend primarily on what those systems are trying to achieve. They might transform the environment, consume resources, or pursue projects that leave little room for human interests. Human extinction is one possible outcome, but it's not the only one. Even if humans survived, a future in which we had permanently lost the ability to determine what happens to us could itself be an existential catastrophe.

There are a lot of many separate things have to go wrong for this scenario to happen. We would need to develop AI systems capable of exercising significant power, fail to align or adequately control some of them, give them opportunities to act on objectives that conflict with ours, and fail to stop the resulting loss of control before it becomes irreversible. None of these steps is guaranteed by the preceding one.

So where does this leave us? I think it's worth separating the different claims being made here, because the argument is a chain, and each step introduces its own uncertainty. The most useful thing about working through these readings has been understanding that the concern isn't simply that AI will become very smart, or that it will somehow become evil. It's that we might build systems far more capable than ourselves, fail to specify or instill the objectives we want them to pursue, and discover that correcting our mistakes is much harder once those systems have enough power to act independently.