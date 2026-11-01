---
title: My understanding of how AI could go wrong
layout: post
---
Over the past month, my main goal has been to understand the arguments behind risks posed by AI. I've worked through a bunch of readings, starting with *If Anyone Builds It, Everyone Dies*, Richard Ngo's *AGI Safety from First Principles* & *The Alignment Problem From a Deep Learning Perspective*, and Joe Carlsmith's *Is Power-Seeking AI an Existential Risk?*, along with a bunch of other resources recommended in [lists like these](https://80000hours.org/articles/11-essential-resources-ai-risk/).

By the third or fourth reading, I obviously started encountering a lot of the same arguments. It was rather tempting to click on hyperlinks and go down rabbit holes more immediately, but I found it helpful to read several different explanations of the broader arguments first instead of stopping at one because [complete later]

What I want to do here is reconstruct the arguments as I currently understand them, roughly in the order I learned them. This is to test whether I've actually understood what I've read and because I still remember my initial reactions and want to document them.

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

Consider a social media recommendation algorithm. Suppose our goal is to show people content they'll enjoy. Enjoyment is difficult to measure, so we might use the amount of time people spend on the platform as a proxy. The problem is that maximizing time spent on an app isn't quite the same as maximizing enjoyment. The algorithm might discover that upsetting or controversial content keeps people engaged for longer, and recommend more of it. From the algorithm's perspective, it's succeeding at the task we gave it, even though the outcome isn't what we wanted.

There's one example of this from an OpenAI experiment. Researchers trained an AI to play a boat-racing video game, rewarding it for collecting points along the course. Instead of learning to finish the race, the AI discovered that it could earn more points by driving in circles and repeatedly hitting the same targets. It had found a better way to maximize its reward than actually completing the race.

This is called *reward hacking*. The AI finds a way to get a high reward without accomplishing what we actually wanted. Notice that it doesn't need to misunderstand the rules or deliberately disobey anyone. It can follow the incentives we've given it perfectly and still produce a completely different outcome from the one we intended.

There's another, slightly different problem that I found particularly interesting: even if we reward exactly the behavior we want, how do we know the AI has learned the right lesson?

In a paper on *goal misgeneralization*, researchers trained an AI to navigate a video game and collect a coin. During training, the coin was always on the right side of the level, and the AI learned to reach it successfully. But when researchers moved the coin to a different location, something strange happened: the AI kept going right, even when the coin was somewhere else.

Think about what happened there. From the outside, the AI looked like it had learned to collect coins. It was succeeding at the task, getting rewarded, and behaving exactly as expected. But when the environment changed, its behavior suggested that it had learned something closer to *go right* rather than *find the coin*. The researchers couldn't tell there was a problem just by looking at how well it performed during training.

Now, these are relatively simple systems playing games, but consider what happens as we give AI more complicated responsibilities. Instead of collecting coins or racing boats, imagine an AI responsible for running a company, developing new drugs, or managing important infrastructure. There are far more things it could do, far more ways to achieve an apparently good result, and far more situations we couldn't possibly anticipate during training.

And remember what we established about intelligence: a sufficiently capable AI might be able to come up with solutions and strategies that humans wouldn't think of. That ability could be enormously useful, but it also means it might find ways to achieve its objective that we never anticipated, including ways we wouldn't have approved of.

This is the *alignment problem*: how do we make sure an AI is actually pursuing what we want, rather than something that merely looks like what we want during training?



&nbsp;

&nbsp;