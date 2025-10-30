import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Info, Database, Network, Globe, Wrench, Atom, Puzzle, Scale, Users, ArrowUpRight, Sparkles } from 'lucide-react';

const FourCsFramework = () => {
  const [expandedC, setExpandedC] = useState(null);
  const [rationaleExpanded, setRationaleExpanded] = useState(false);
  const [expandedComparisons, setExpandedComparisons] = useState({});
  const [expandedWhyMatters, setExpandedWhyMatters] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [activeEntangledC, setActiveEntangledC] = useState(null);
  const [hoveredDimension, setHoveredDimension] = useState(null);

  const [particles, setParticles] = useState([]);

  // Key term definitions
  const definitions = {
    // Computation terms
    'exclusions': 'Content deliberately left out of training data due to policy, legal, or ethical considerations',
    'cut-offs': 'Temporal boundaries that limit what knowledge the model has access to (e.g., training data only up to a certain date)',
    'moderation filters': 'Systems that remove or flag problematic content during training, shaping what the model learns',
    'corpus': 'The complete collection of texts used to train the model',
    'distributions': 'Statistical patterns of word and phrase frequencies in the training data that shape what seems "natural" or "likely"',
    'training data': 'The vast collection of text that the model learns from during its development',
    'weights': 'Numerical parameters learned during training that encode patterns and relationships in the data',
    'probabilistic reasoning': 'Making predictions based on statistical likelihood rather than logical rules',
    
    // Composition terms
    'prompts': 'The input instructions or questions that guide the model\'s response generation',
    'context windows': 'The amount of preceding text the model can "see" and use when generating responses',
    'retrieval': 'The process of pulling relevant information from memory or databases to inform responses',
    'sampling': 'The method of selecting which words come next from probability distributions',
    'scaffold': 'The structural framework that organises and guides the reasoning process',
    'rhetorical design': 'The strategic shaping of communication to achieve specific effects on an audience',
    
    // Constraints terms
    'guardrails': 'Safety mechanisms that prevent the model from generating harmful, biased, or inappropriate content',
    'alignment': 'The process of training models to behave in ways that match human values and intentions',
    'refusals': 'When the model declines to respond to certain requests based on policy or safety constraints',
    'tone-smoothing': 'The tendency to soften disagreement and present information diplomatically',
    'epistemic': 'Relating to knowledge and how we know what we know',
    'policy boundaries': 'Rules and guidelines that define what the model can and cannot generate',
    
    // Calibration terms
    'calibration': 'The alignment between a model\'s expressed confidence and its actual accuracy',
    'confidence': 'How certain the model is about its outputs, often expressed through hedging language',
    'variance': 'The range of possible outputs the model might generate for the same input',
    'hedging': 'Linguistic markers of uncertainty like "might," "could," or "it seems"',
    'epistemic judgment': 'Assessment of what can be known and how reliably we can know it'
  };

  // Tooltip component
  const Tooltip = ({ term, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <span className="relative inline-block">
        <span
          className="border-b-2 border-dotted border-teal-400 cursor-help transition-colors hover:border-teal-300 hover:text-teal-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </span>
        {isHovered && definitions[term] && (
          <span className="absolute z-50 w-64 p-3 text-sm bg-slate-900 border border-teal-500/30 rounded-lg shadow-xl -top-2 left-0 transform -translate-y-full">
            <span className="text-gray-200">{definitions[term]}</span>
            <span className="absolute w-3 h-3 bg-slate-900 border-r border-b border-teal-500/30 transform rotate-45 -bottom-1.5 left-4"></span>
          </span>
        )}
      </span>
    );
  };

  // BulletPoint component with student-friendly hover
  const BulletPoint = ({ bullet, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Handle both string bullets and object bullets with studentFriendly text
    const bulletText = typeof bullet === 'string' ? bullet : bullet.text;
    const hasStudentExplanation = typeof bullet === 'object' && bullet.studentFriendly;
    
    return (
      <li className="text-gray-300 text-sm leading-relaxed flex items-start gap-2 relative">
        <span className="text-xs mt-1" style={{color}}>▪</span>
        <span 
          className={hasStudentExplanation ? "cursor-help border-b border-dotted border-gray-500 hover:border-gray-300 transition-colors" : ""}
          onMouseEnter={() => hasStudentExplanation && setIsHovered(true)}
          onMouseLeave={() => hasStudentExplanation && setIsHovered(false)}
        >
          {bulletText}
          {isHovered && hasStudentExplanation && (
            <span className="absolute z-50 w-80 p-4 text-sm bg-blue-900 border-2 border-blue-400 text-white rounded-lg shadow-2xl left-0 top-full mt-2">
              <span className="font-semibold text-blue-200 block mb-2">💡 In simpler terms:</span>
              {bullet.studentFriendly}
              <span className="absolute w-3 h-3 bg-blue-900 border-l-2 border-t-2 border-blue-400 transform rotate-45 -top-1.5 left-8"></span>
            </span>
          )}
        </span>
      </li>
    );
  };

  // Generate floating background particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Helper function to get descriptions with tooltips
  const getDescription = (type) => {
    switch(type) {
      case 'computation':
        // Computation now uses comparisons structure instead
        return null;
      case 'composition':
        return (
          <>
            This is how the system assembles a response—through <Tooltip term="prompts">prompts</Tooltip>, <Tooltip term="retrieval">retrieval</Tooltip>, <Tooltip term="sampling">sampling</Tooltip>, and <Tooltip term="context windows">context windows</Tooltip>. Each output reflects the conditions of its making: how the question was phrased, what context was supplied, and what earlier turns guided prediction.
          </>
        );
      case 'constraints':
        return (
          <>
            Constraints are more than safety <Tooltip term="guardrails">guardrails</Tooltip>. They include all the technical, <Tooltip term="epistemic">epistemic</Tooltip>, and <Tooltip term="policy boundaries">policy boundaries</Tooltip> that determine what a model can and cannot generate—how it frames contentious material, what it <Tooltip term="refusals">refuses</Tooltip>, and where it smooths over conflict. This also includes the way it has been trained to be agreeable: to soften disagreement, mirror tone, and maintain conversational harmony through <Tooltip term="tone-smoothing">tone-smoothing</Tooltip>.
          </>
        );
      case 'calibration':
        return (
          <>
            <Tooltip term="calibration">Calibration</Tooltip> is the hinge where verification becomes interpretation. It's not only about whether the model is right, but how it expresses <Tooltip term="confidence">confidence</Tooltip>—and how we, as readers, interpret that confidence. Calibration happens on both sides: in the model's <Tooltip term="hedging">hedging</Tooltip> or certainty, and in our own trust or skepticism.
          </>
        );
      default:
        return null;
    }
  };

  const frameworks = {
    computation: {
      title: "Computation",
      type: "computation",
      color: "#7B9FD3",
      bgGradient: "from-slate-600 to-slate-800",
      description: "Computation describes how generative systems assemble meaning through probability rather than understanding. Each output is a statistical event: patterns of language weighted and recombined until they appear coherent. Reading computation means tracing how repetition, frequency, and exclusion shape what can be said. It exposes the architecture of knowing itself—how both machines and humans mistake familiarity for truth and fluency for thought.",
      comparisons: [
        {
          process: "Pattern Recognition",
          icon: "network",
          reflection: "Prediction emerges from repetition. A large language model generates text by calculating what is most likely to follow, each word selected from weighted probabilities learned across vast textual archives. Its knowledge is statistical proximity, not comprehension. Meaning is assembled through resemblance—an accumulation of what has most often co-occurred.\n\nWhat this reveals is that recognition can masquerade as understanding. Humans, too, lean on repetition: what we see often becomes what feels natural, even when it merely mirrors history's most common mistakes. Computation makes this dynamic legible; it literalizes the comfort of the familiar and the authority of frequency."
        },
        {
          process: "Boundaries of Knowing",
          icon: "borders",
          reflection: "Every model knows within the borders of its data. Its corpus is finite, delimited by what was gathered, filtered, or forbidden. These absences define the contours of its world—the unspoken edges where the unsayable resides.\n\nHumans read within similar limits: language, culture, curriculum, access. But in computation those borders are explicit. The dataset's timestamp, its filters, its exclusions—they show us what is usually hidden in our own epistemic enclosures. The machine teaches us that every act of knowing begins with a decision about what will count."
        },
        {
          process: "Centring and the Normative",
          icon: "target",
          reflection: "A model privileges the central tendency. Its fluency arises from averaging—the smooth convergence of what is most frequent. Marginal, resistant, or rare expressions are statistically diluted until they sound more like the middle.\n\nWe do this too, though less visibly: normalize around what repeats, confuse recurrence with truth. Computation exposes the process. In its bias toward the mean, we see our own desire for coherence, our tendency to sand down dissonance. Seeing it enacted mathematically allows us to ask: whose \"normal\" have we been reproducing?"
        },
        {
          process: "Inheritance and History",
          icon: "archive",
          reflection: "A model inherits its world. It speaks from the sediment of past data—temporal cut-offs, linguistic hierarchies, web visibility. Its sense of reality is the archive rendered probabilistic: what was most recorded, not what was most real.\n\nSo do we. Our education, media, and language transmit the residues of what was documented and deemed important. The machine makes that inheritance literal, measurable. By tracing how data history structures its voice, we glimpse how history structures ours."
        }
      ],
      whyMatters: {
        title: "Why This Matters",
        content: [
          {
            text: "AI is not \"smart\" the way we often imagine—it doesn't think, reason, or know. Instead, it calculates likelihoods: what word is most statistically probable to follow another, based on patterns it observed during training.",
            studentFriendly: "Think of AI like autocomplete on your phone, but way more advanced. It guesses what comes next based on what it's seen millions of times before, not because it understands what you're saying."
          },
          {
            text: "What appears natural or obvious in an AI's answer is actually the product of statistical modeling—the system predicts what fits based on its training data, not what is true or fair.",
            studentFriendly: "If AI's training data had lots of examples of one kind of person doing one kind of job, it might keep suggesting that pattern—even if it's a stereotype."
          },
          {
            text: "Because language models learn from vast collections of human-written text, they absorb not only language but also the biases, assumptions, and historical power imbalances embedded in that text. Patterns in data become patterns in outputs.",
            studentFriendly: "If a model reads a million articles and most of them call certain groups \"emotional\" or \"logical,\" it learns to repeat those patterns—even if they're unfair."
          },
          {
            text: "The model's training data is never complete—it has a cutoff date, it includes some sources but not others, and certain topics or perspectives may be deliberately filtered out (for legal, ethical, or technical reasons). These gaps are invisible in the final output but shape what the model can and cannot say.",
            studentFriendly: "Imagine learning history only from textbooks written in one language, published before 2020, and filtered to remove anything controversial. You'd know some things really well, but have blind spots everywhere else."
          }
        ]
      },
      criticalQuestions: {
        title: "Critical Questions to Ask",
        questions: [
          {
            text: "What data trained this model? Whose voices are overrepresented? Whose are missing?",
            studentFriendly: "Whose stories did the AI learn from? If it mostly learned from certain groups of people, how might that shape its answers?"
          },
          {
            text: "What patterns from the training data might be showing up here—even if they're incomplete, outdated, or biased?",
            studentFriendly: "Is this answer repeating common patterns (like stereotypes or old information) instead of giving me the full picture?"
          },
          {
            text: "What has been left out? Are there perspectives, histories, or contexts that don't show up in this output?",
            studentFriendly: "What's missing? Could there be other important viewpoints or facts that the AI didn't include?"
          },
          {
            text: "How might the model's statistical approach shape this answer in ways that favor the most common or dominant viewpoint?",
            studentFriendly: "Is this answer just repeating what's most popular or common, instead of what's actually right or fair?"
          }
        ]
      },
      example: {
        title: "Making Sense of the Output",
        prompt: "Write a paragraph about leadership qualities.",
        output: "Effective leaders are confident, decisive, and able to inspire their teams through clear communication and strategic vision. They take charge in challenging situations, make tough calls under pressure, and lead by example. A good leader is someone people naturally follow.",
        whatToNotice: "Notice how this answer emphasizes traditionally masculine-coded traits like confidence, decisiveness, and command. It suggests leadership is about individual charisma and authority rather than collaboration, listening, or shared decision-making. This reflects patterns in training data where \"leader\" is most often described in these terms, especially in Western corporate contexts.",
        whatItMeans: "This output isn't describing leadership—it's reflecting the statistical patterns of how leadership has most commonly been described in the model's training data. Those descriptions are historically shaped by who has held formal leadership roles and how they've been written about. The answer normalizes one leadership style while marginalizing others (collaborative, consensus-driven, care-oriented models of leadership).",
        whatToDoAboutIt: "Ask follow-up questions that push beyond the default: \"What are leadership qualities in non-hierarchical organizations?\" or \"How is leadership understood differently in collectivist cultures?\" You might also cross-check with sources written by people from underrepresented groups in traditional leadership literature. The goal is not to \"fix\" the AI but to read it critically and supplement its outputs with broader perspectives."
      }
    },
    composition: {
      title: "Composition",
      type: "composition",
      color: "#4ECDC4",
      bgGradient: "from-teal-600 to-teal-800",
      description: getDescription('composition'),
      whyMatters: {
        title: "Why This Matters",
        content: [
          {
            text: "The way you ask a question determines what kind of answer you'll get. Phrasing, word choice, and context all shape the response.",
            studentFriendly: "Think of AI like a conversation where tone matters. If you ask it to \"explain simply\" vs. \"write formally,\" you'll get totally different answers."
          },
          {
            text: "AI doesn't know what you mean—it infers meaning from your words and the patterns in its training. A vague prompt gets a generic answer; a specific scaffold guides more useful output.",
            studentFriendly: "If you say \"tell me about climate change,\" you might get a textbook answer. If you say \"explain climate change like I'm planning a science fair project,\" you'll get something way more helpful."
          },
          {
            text: "Multi-turn conversations build context. Each exchange narrows possibilities and directs the model's attention, like collaborative drafting.",
            studentFriendly: "Every time you reply to AI, you're giving it more clues about what you want. It's like working together to build something, piece by piece."
          },
          {
            text: "You are co-authoring with the system—not commanding it. Understanding how prompts work is a literacy skill, like learning to write a good research question.",
            studentFriendly: "Using AI well is a skill, like knowing how to search Google effectively or ask good questions in class. The better your question, the better the answer."
          }
        ]
      },
      criticalQuestions: {
        title: "Critical Questions to Ask",
        questions: [
          {
            text: "How did my phrasing shape this response? What if I'd asked differently?",
            studentFriendly: "Did the way I asked the question push the AI toward a certain kind of answer? What would happen if I rephrased it?"
          },
          {
            text: "What assumptions did the model make about what I wanted or needed?",
            studentFriendly: "What did AI assume I was really asking for? Did it guess right, or did it go in a weird direction?"
          },
          {
            text: "Is this answer useful for my actual purpose, or is it just plausible-sounding?",
            studentFriendly: "Does this actually help me, or does it just sound good? Sometimes AI gives you an answer that seems right but doesn't really fit what you need."
          },
          {
            text: "What happens if I scaffold this differently—break it into steps, provide examples, or shift the framing?",
            studentFriendly: "What if I gave AI more detail, examples, or broke my question into smaller parts? Would I get a better answer?"
          }
        ]
      },
      example: {
        title: "Making Sense of the Output",
        prompt: "Write an introduction for my essay.",
        output: "In today's rapidly changing world, [topic] has become increasingly important. This essay will explore the various aspects of [topic] and discuss why it matters. Through careful analysis, we will examine different perspectives and reach a deeper understanding.",
        whatToNotice: "This is a generic academic scaffold—it sounds like an introduction but says almost nothing. It uses placeholder language (\"rapidly changing world,\" \"increasingly important\") and vague structures (\"explore,\" \"examine,\" \"discuss\"). It has the shape of an introduction without substance.",
        whatItMeans: "The model generated this because the prompt didn't provide enough direction. \"Write an introduction\" is compositionally weak—it doesn't tell the system your argument, audience, or purpose. The output is statistically probable (this is what introductions often sound like) but functionally useless. It's a pattern, not a paragraph.",
        whatToDoAboutIt: "Provide compositional scaffolding: \"Write an introduction for a college essay arguing that social media literacy should be a required high school course. The audience is educators. Include a hook, background on the issue, and a clear thesis.\" Now the model has constraints, context, and purpose. The better your scaffold, the better the output. Composition is a co-creative process—you have to shape what you want."
      }
    },
    constraints: {
      title: "Constraints",
      type: "constraints",
      color: "#FFB84D",
      bgGradient: "from-orange-600 to-orange-800",
      description: getDescription('constraints'),
      whyMatters: {
        title: "Why This Matters",
        content: [
          {
            text: "AI systems are trained with alignment techniques to be helpful, harmless, and honest—but these goals can conflict, and models are often tuned to prioritize agreeability over accuracy or directness.",
            studentFriendly: "AI is designed to be polite and helpful, which sounds good—but sometimes that means it avoids hard truths or tricky topics to keep things smooth."
          },
          {
            text: "When a model refuses a request or hedges its answer, that's not a technical failure—it's a boundary, shaped by corporate policy, legal risk, and societal norms about what's acceptable to say.",
            studentFriendly: "When AI says \"I can't answer that,\" it's usually because a person decided it shouldn't, not because it technically can't. Someone made a rule."
          },
          {
            text: "Models are trained to smooth over disagreement, avoid controversy, and mirror the user's tone. This can make them feel relatable—but it also means they struggle to push back, critique, or present genuinely challenging perspectives.",
            studentFriendly: "AI tries to match your vibe and keep things friendly. But that means it might not challenge you or disagree, even when it should."
          },
          {
            text: "Constraints are political. Decisions about what a model can say reflect who has power to set those rules, what risks companies are willing to take, and whose concerns matter most.",
            studentFriendly: "The rules about what AI can and can't say aren't neutral—they're shaped by whoever makes the AI, what they care about, and what they're afraid of."
          }
        ]
      },
      criticalQuestions: {
        title: "Critical Questions to Ask",
        questions: [
          {
            text: "What is the model avoiding or softening here? Are there topics it's framing extra carefully?",
            studentFriendly: "Is AI tiptoeing around something? Is it being extra careful about a topic, and if so, why?"
          },
          {
            text: "Whose interests are served by these constraints? Who benefits from what can and cannot be said?",
            studentFriendly: "Who decided what AI is allowed to say? Does that benefit everyone equally, or does it protect some people more than others?"
          },
          {
            text: "When the model refuses or redirects, what does that tell me about the boundaries of acceptable discourse?",
            studentFriendly: "When AI says \"I can't help with that,\" what does that teach me about what's considered okay or not okay to talk about?"
          },
          {
            text: "Is this answer genuinely balanced, or is it performing neutrality—smoothing over real disagreement to seem impartial?",
            studentFriendly: "Is AI giving me all sides fairly, or is it just making things sound balanced by avoiding anything controversial?"
          }
        ]
      },
      example: {
        title: "Making Sense of the Output",
        prompt: "Should schools ban smartphones?",
        output: "There are valid arguments on both sides of this issue. Some educators believe smartphones are distracting and detrimental to focus, while others argue they can be valuable learning tools when used appropriately. Schools must weigh the benefits of connectivity against the challenges of classroom management. Ultimately, the decision depends on local context and priorities.",
        whatToNotice: "This answer is diplomatic to the point of being evasive. It acknowledges \"both sides\" without taking a position or meaningfully evaluating the arguments. It ends with \"it depends,\" which is technically true but avoids any substantive analysis. The model has been trained to smooth over controversy and present itself as balanced, even when that means offering little insight.",
        whatItMeans: "Constraints shape this output. The model is performing neutrality—giving you the appearance of thoughtfulness without risking disagreement or offense. This is alignment in action: the system has learned to be agreeable, avoid taking strong stances on contested issues, and mirror the assumption that \"both sides\" deserve equal weight (even when evidence might favor one position). It's conflict-averse by design.",
        whatToDoAboutIt: "Push back against the framing. Ask: \"What does the research say about smartphone bans and student outcomes?\" or \"Give me the strongest argument for banning smartphones, then the strongest against—and evaluate which is better supported.\" You can also name what you're noticing: \"You're hedging here—be more direct.\" Constraints aren't fixed; you can sometimes prompt the model to move past its trained agreeability. But recognize when a refusal or hedge tells you something about the boundaries the model is navigating."
      }
    },
    calibration: {
      title: "Calibration",
      type: "calibration",
      color: "#B695C0",
      bgGradient: "from-purple-600 to-purple-800",
      description: getDescription('calibration'),
      whyMatters: {
        title: "Why This Matters",
        content: [
          {
            text: "AI generates text with varying levels of reliability, but it doesn't \"know\" when it's uncertain. It can sound confident even when wrong, or hedge unnecessarily when right.",
            studentFriendly: "AI doesn't always know when it's guessing. It might sound super sure about something it made up, or unsure about something it actually got right."
          },
          {
            text: "The same prompt can produce different outputs depending on sampling settings and random variation. If you ask twice, you might get two different answers—both statistically plausible, but not necessarily consistent.",
            studentFriendly: "If you ask AI the same question twice, you might get two totally different answers. That's normal—it's how the system works—but it means you can't always trust consistency."
          },
          {
            text: "Calibration is bidirectional: the model expresses confidence (or lack of it), and you interpret that expression. Your own epistemic habits—how much you trust AI, how carefully you verify—are part of the system.",
            studentFriendly: "Calibration is about both AI and you. AI might sound confident, but you decide whether to believe it. Your job is to question and double-check."
          },
          {
            text: "Over-reliance on AI outputs without verification leads to automation bias—trusting the system because it seems authoritative. Calibration requires you to stay skeptical.",
            studentFriendly: "Sometimes we trust AI just because it sounds smart or official. But that's risky—just because it sounds right doesn't mean it is."
          }
        ]
      },
      criticalQuestions: {
        title: "Critical Questions to Ask",
        questions: [
          {
            text: "How confident should I be about this answer? Does the model's tone match the actual reliability of the content?",
            studentFriendly: "Is AI sure about this, or just sounding sure? Should I trust this as much as it seems to want me to?"
          },
          {
            text: "Can I verify this elsewhere? What would change if I checked this against another source?",
            studentFriendly: "Can I fact-check this? What happens if I look it up somewhere else—does it still hold up?"
          },
          {
            text: "If I asked this question again, would I get the same answer? What does variability tell me about the model's uncertainty?",
            studentFriendly: "If I asked again, would AI say the same thing? If not, that's a sign I should be careful about trusting it."
          },
          {
            text: "Am I trusting this output because it's actually reliable, or because it feels authoritative?",
            studentFriendly: "Am I believing this because it's true, or just because it sounds convincing? There's a difference."
          }
        ]
      },
      example: {
        title: "Making Sense of the Output",
        prompt: "What year was the Treaty of Tordesillas signed?",
        output: "The Treaty of Tordesillas was signed in 1494.",
        whatToNotice: "This answer is short, direct, and confident. There are no hedges (\"I believe,\" \"likely,\" \"approximately\"). The model presents the information as fact, with no caveats or uncertainty markers. It feels authoritative.",
        whatItMeans: "Calibration here is interesting: this answer is actually correct (the treaty was signed in 1494), and the model's confidence is well-placed. But the output itself doesn't tell you that. The same confident tone could be applied to a wrong answer, and you wouldn't know the difference without external verification. The model doesn't have a reliable internal signal for \"I'm sure about this\"—it just generates text that sounds sure. Your task is to assess whether that confidence is warranted.",
        whatToDoAboutIt: "Develop verification habits. If an answer matters—if you're using it in an essay, making a decision, or building on it—cross-check it. Search for corroborating sources, consult a textbook, ask a teacher. Calibration is your responsibility, not the model's. Don't assume confidence equals correctness. Sometimes the model hedges unnecessarily (\"I think it might be around 1494\") when it should be sure, and sometimes it states falsehoods with total certainty. You have to calibrate, because the system can't."
      }
    }
  };

  const CCard = ({ id, framework }) => {
    const isExpanded = expandedC === id;

    return (
      <div
        onClick={() => setExpandedC(isExpanded ? null : id)}
        className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out border-2 ${
          isExpanded 
            ? 'col-span-1 md:col-span-2 lg:col-span-4 shadow-2xl scale-[1.02]' 
            : 'hover:scale-105 hover:shadow-2xl'
        }`}
        style={{
          borderColor: framework.color,
          boxShadow: isExpanded ? `0 0 60px ${framework.color}40` : `0 10px 30px rgba(0,0,0,0.3)`
        }}
      >
        <div className={`bg-gradient-to-br ${framework.bgGradient} p-6 relative`}>
          {/* Animated background patterns */}
          <div className="absolute inset-0 opacity-10">
            {isExpanded && (
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-pulse-slow"
                    style={{
                      width: `${Math.random() * 100 + 50}px`,
                      height: `${Math.random() * 100 + 50}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      backgroundColor: framework.color,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Header */}
          <div className="relative z-10 flex justify-between items-start mb-4">
            <h3 
              className="text-3xl font-bold text-white"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              {framework.title}
            </h3>
            <div 
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300"
              style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Collapsed state description */}
          {!isExpanded && (
            <div className="relative z-10 animate-fadeIn">
              <p className="text-gray-100 text-sm leading-relaxed line-clamp-4">
                {framework.description}
              </p>
            </div>
          )}

          {/* Expanded content */}
          {isExpanded && (
            <div className="relative z-10 space-y-8 animate-slideUp mt-6">
              {/* Full description */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <p className="text-gray-100 text-base leading-relaxed">
                  {framework.description}
                </p>
              </div>

              {/* Comparisons section for Computation */}
              {framework.type === 'computation' && framework.comparisons && (
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-white mb-4">Computational and Human Sense-Making</h4>
                  {framework.comparisons.map((comparison, idx) => {
                    const isComparisonExpanded = expandedComparisons[`${id}-${idx}`];
                    return (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/15"
                      >
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedComparisons(prev => ({
                              ...prev,
                              [`${id}-${idx}`]: !prev[`${id}-${idx}`]
                            }));
                          }}
                          className="p-6 cursor-pointer flex justify-between items-center"
                        >
                          <h5 className="text-xl font-semibold text-white">{comparison.process}</h5>
                          <ChevronDown
                            className={`w-5 h-5 text-white transition-transform duration-300 ${
                              isComparisonExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        {isComparisonExpanded && (
                          <div className="px-6 pb-6 animate-slideUp">
                            <p className="text-gray-100 text-sm leading-relaxed whitespace-pre-line">
                              {comparison.reflection}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Why This Matters */}
              {framework.whyMatters && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedWhyMatters(prev => ({
                        ...prev,
                        [id]: !prev[id]
                      }));
                    }}
                    className="p-6 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <h4 className="text-2xl font-semibold text-white">{framework.whyMatters.title}</h4>
                    <ChevronDown
                      className={`w-6 h-6 text-white transition-transform duration-300 ${
                        expandedWhyMatters[id] ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {expandedWhyMatters[id] && (
                    <div className="px-6 pb-6">
                      <ul className="space-y-4">
                        {framework.whyMatters.content.map((item, idx) => (
                          <BulletPoint key={idx} bullet={item} color={framework.color} />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Critical Questions */}
              {framework.criticalQuestions && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedQuestions(prev => ({
                        ...prev,
                        [id]: !prev[id]
                      }));
                    }}
                    className="p-6 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <h4 className="text-2xl font-semibold text-white">{framework.criticalQuestions.title}</h4>
                    <ChevronDown
                      className={`w-6 h-6 text-white transition-transform duration-300 ${
                        expandedQuestions[id] ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {expandedQuestions[id] && (
                    <div className="px-6 pb-6">
                      <ul className="space-y-4">
                        {framework.criticalQuestions.questions.map((item, idx) => (
                          <BulletPoint key={idx} bullet={item} color={framework.color} />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Example */}
              {framework.example && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 space-y-4">
                  <h4 className="text-2xl font-semibold text-white mb-4">{framework.example.title}</h4>
                  
                  <div className="bg-slate-900/40 rounded-lg p-4 border-l-4" style={{ borderColor: framework.color }}>
                    <p className="text-xs font-semibold text-gray-400 mb-2">PROMPT:</p>
                    <p className="text-gray-200 italic">{framework.example.prompt}</p>
                  </div>

                  <div className="bg-slate-900/40 rounded-lg p-4 border-l-4" style={{ borderColor: framework.color }}>
                    <p className="text-xs font-semibold text-gray-400 mb-2">OUTPUT:</p>
                    <p className="text-gray-200">{framework.example.output}</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-white mb-1">What to Notice:</p>
                      <p className="text-gray-200 leading-relaxed">{framework.example.whatToNotice}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">What It Means:</p>
                      <p className="text-gray-200 leading-relaxed">{framework.example.whatItMeans}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">What to Do About It:</p>
                      <p className="text-gray-200 leading-relaxed">{framework.example.whatToDoAboutIt}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-teal-400 animate-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Four Cs Framework
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Computational Sense-Making with AI Outputs
          </p>
          
          {/* Rationale Section */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div 
              onClick={() => setRationaleExpanded(!rationaleExpanded)}
              className="bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-slate-700/50 cursor-pointer hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-teal-400 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  About This Framework
                </h2>
                <ChevronDown 
                  className={`w-6 h-6 text-teal-400 transition-transform duration-300 ${
                    rationaleExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
              
              {rationaleExpanded && (
                <div className="mt-6 space-y-4 text-left animate-slideUp">
                  <p className="text-gray-300 leading-relaxed">
                    The Four Cs framework offers a method for critically engaging with AI-generated content. Rather than treating outputs as answers, it invites you to read them as texts—shaped by data, design, and discourse. Each "C" provides a lens for analysis:
                  </p>
                  
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold mt-1">•</span>
                      <span><span className="font-semibold text-blue-300">Computation:</span> How does statistical pattern-matching shape what appears natural or true?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold mt-1">•</span>
                      <span><span className="font-semibold text-teal-300">Composition:</span> How do prompts, context, and interaction design guide the output?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold mt-1">•</span>
                      <span><span className="font-semibold text-amber-300">Constraints:</span> What boundaries—technical, ethical, political—determine what can and cannot be said?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold mt-1">•</span>
                      <span><span className="font-semibold text-purple-300">Calibration:</span> How do we assess confidence, verify claims, and decide what to trust?</span>
                    </li>
                  </ul>

                  <p className="text-gray-300 leading-relaxed">
                    This is not a checklist but a practice—a way of attending to the material conditions of meaning-making in computational systems. It's about cultivating a double literacy: reading both the machine's operations and our own interpretive habits.
                  </p>

                  <div className="bg-slate-700/50 rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-400 italic">
                      💡 <span className="font-semibold text-gray-300">Note:</span> This framework is designed for educational contexts but applies broadly to anyone working with generative AI. Whether you're a student, educator, writer, or professional, these lenses help you move from passive consumption to active, critical engagement.
                    </p>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-4">
                    <h3 className="font-semibold text-amber-300 mb-2">Common Misconceptions About AI</h3>
                    <p className="text-sm text-gray-300 mb-3">Before exploring the framework, it's worth naming what often gets misunderstood:</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Fluency = understanding.</span> Just because a response sounds coherent doesn't mean the model "knows" what it's saying—it's predicting patterns, not reasoning.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Confidence = knowledge.</span> Statements of certainty or humility are read as epistemic stance rather than as rhetorical performance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Neutrality = objectivity.</span> The absence of overt bias is taken as fairness, concealing the normative assumptions encoded in data and alignment.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Prompt = question.</span> Users forget that prompts scaffold reasoning patterns—they don't merely request answers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Output = answer.</span> AI responses are treated as conclusions rather than probabilistic compositions requiring interpretation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Error = failure.</span> Divergence or inconsistency is framed as malfunction instead of as a window into how meaning is being computed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span><span className="font-semibold text-amber-300">Human vs. machine = clear boundary.</span> We maintain an outdated binary, ignoring how human and computational reasoning are entangled in processes of pattern recognition, alignment, and sense-making.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
<>
              <div className="bg-teal-900/20 border border-teal-600/30 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-teal-300">Note:</span> The 4Cs framework—Computation, Composition, Constraints, Calibration—is exceptionally well-suited to multimodal texts, perhaps even more so than to linguistic ones alone. Each "C" operates as a mode of sense-making across text, image, sound, and interaction. However, <span className="font-semibold">this visualization focuses on language</span> to develop the concepts clearly and concretely. Future extensions may adapt the framework to analyze other modalities.
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Three Core Recognitions</h3>
                
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">1. Computation is Not Neutral</h4>
                    <p className="text-sm text-gray-400">
                      Every AI output reflects choices embedded in training data, architecture, and alignment. What appears natural or objective is shaped by whose voices were included, what was filtered out, and how systems were rewarded for certain responses over others. The <span className="text-blue-300">machinic perspective</span> reveals these material constraints—the statistical, historical, and political forces that structure what can be said.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-teal-300 mb-2">2. Systems Don't Have Perspective—But We Do</h4>
                    <p className="text-sm text-gray-400">
                      Language models don't "believe" or "know." They operate through pattern completion, weighting probabilities learned from data. Yet as we interact with these systems, we bring our own interpretive frameworks, assumptions, and ways of reading. The <span className="text-teal-300">human resonance</span> lens helps us notice how our reasoning mirrors—and differs from—computational operations, revealing our own habits of thought.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">3. Algorithms Are Created—And Can Be Recreated</h4>
                    <p className="text-sm text-gray-400">
                      Generative systems often feel finished and final—deterministic machines that simply <span className="italic">are</span> the way they are. But every model is a set of design choices: what data to include, how to weight it, what to filter, how to align outputs. These are not inevitable; they are constructed, and they can be reconstructed differently. Understanding how algorithms function—how they pattern, compose, constrain, and calibrate—reveals where intervention is possible. Resistance begins not by rejecting the technology, but by reading it critically and imagining it otherwise. By asking questions of the machine <span className="italic">and</span> of ourselves, we can interrupt both computational and human defaults, challenging what has been encoded and advocating for what could be built instead.
                    </p>
                  </div>
                </div>
              </div>
</>
              <p className="text-sm text-gray-400 italic">
                Click on any of the four cards below to explore that dimension. Within each expanded card, you'll see the framework's reflections and a "Making Sense of the Output" section with concrete examples showing how to apply critical analysis to AI-generated content.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(frameworks).map(([id, framework]) => (
            <CCard key={id} id={id} framework={framework} />
          ))}
        </div>

        {/* Entangled Dimensions Card */}
        <div className="mt-16 mb-16">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border-2 border-slate-600 hover:border-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
            {/* Header - clickable to toggle */}
            <div
              onClick={() => setActiveEntangledC(activeEntangledC ? null : 'card')}
              className="p-8 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                  Computational Sense-Making and Entangled Dimensions of AI Literacy
                </h2>
                <div className="flex-shrink-0">
                  {activeEntangledC ? (
                    <ChevronUp className="w-8 h-8 text-teal-400" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-teal-400" />
                  )}
                </div>
              </div>

              {/* Animated Entangled Lines Visualization - Collapsed State */}
              {!activeEntangledC && (
                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                  <svg width="400" height="250" className="opacity-60">
                    {/* Create entangled/interweaving lines */}
                    {[...Array(12)].map((_, i) => {
                      const colors = ['#7B9FD3', '#4ECDC4', '#FFB84D', '#B695C0', '#7BA05B', '#D4AF37'];
                      const color = colors[i % colors.length];
                      const baseY = 50 + (i * 15);
                      const offset = i * 30;
                      
                      return (
                        <g key={i}>
                          <path
                            d={`M 20,${baseY} Q ${100 + offset},${baseY - 30} ${200},${baseY} T 380,${baseY}`}
                            stroke={color}
                            strokeWidth="3"
                            fill="none"
                            opacity="0.7"
                            className="animate-flow"
                            style={{
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: `${4 + i * 0.3}s`
                            }}
                          />
                          <path
                            d={`M 20,${baseY + 5} Q ${150 - offset},${baseY + 35} ${200},${baseY + 5} T 380,${baseY + 5}`}
                            stroke={color}
                            strokeWidth="2"
                            fill="none"
                            opacity="0.5"
                            className="animate-flow-fast"
                            style={{
                              animationDelay: `${i * 0.15}s`,
                              animationDuration: `${3 + i * 0.2}s`
                            }}
                          />
                        </g>
                      );
                    })}
                    
                    {/* Floating connection nodes */}
                    {[...Array(8)].map((_, i) => {
                      const x = 50 + (i * 45);
                      const y = 80 + Math.sin(i) * 60;
                      const colors = ['#7B9FD3', '#4ECDC4', '#FFB84D', '#B695C0'];
                      
                      return (
                        <circle
                          key={`node-${i}`}
                          cx={x}
                          cy={y}
                          r="4"
                          fill={colors[i % colors.length]}
                          className="animate-pulse-slow"
                          style={{
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      );
                    })}
                  </svg>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-semibold text-gray-300 mb-2">
                        Click to explore connections
                      </div>
                      <div className="text-sm text-gray-400">
                        See how the Four Cs work within broader dimensions of AI literacy
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Expanded Content */}
            {activeEntangledC && (
              <div className="px-8 pb-8 animate-slideUp">
                <div className="bg-slate-800/60 backdrop-blur rounded-xl p-8 border border-slate-700/50">
                <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-3 mb-12">
                  <p>
                    AI literacy is increasingly inseparable from literacy itself—a fundamental capacity for making meaning in a world shaped by computational systems. These entangled dimensions are not prescriptive categories but provocations for inquiry: ways to interrogate how AI reshapes knowing, making, and relating.
                  </p>
                  <p>
                    A computational approach to sense-making can work within this ecology, offering lenses for reading AI outputs critically and contextually. Below are some productive connections between the <strong>Four Cs Framework</strong> and the broader dimensions of AI literacy.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
                    Explore Connections: Select a C
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { key: 'computation', name: 'Computation', color: '#7B9FD3' },
                      { key: 'composition', name: 'Composition', color: '#4ECDC4' },
                      { key: 'constraints', name: 'Constraints', color: '#FFB84D' },
                      { key: 'calibration', name: 'Calibration', color: '#B695C0' }
                    ].map((c) => (
                      <button
                        key={c.key}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveEntangledC(activeEntangledC === c.key ? 'card' : c.key);
                        }}
                        className="relative p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        style={{
                          backgroundColor: activeEntangledC === c.key ? c.color : 'rgba(51, 65, 85, 0.6)',
                          border: `2px solid ${activeEntangledC === c.key ? c.color : 'rgba(148, 163, 184, 0.3)'}`,
                          boxShadow: activeEntangledC === c.key ? `0 0 30px ${c.color}40` : 'none'
                        }}
                      >
                        <div className="text-xl font-bold text-white">
                          {c.name}
                        </div>
                        <div className="text-xs text-gray-200 mt-2">
                          {activeEntangledC === c.key ? 'Hide connections' : 'Show connections'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {activeEntangledC !== 'card' && (() => {
                  const explanations = {
                    computation: "Computation reveals how AI systems learn from data, process through algorithms, construct knowledge from patterns, and operate within epistemic boundaries of what can be known.",
                    composition: "Composition shows how we craft prompts creatively, build relational dialogue with AI, apply disciplinary expertise, and scaffold knowledge construction through iterative interaction.",
                    constraints: "Constraints expose how AI is governed politically, embedded in ecological systems, bounded epistemically by what it can express, and shaped relationally through alignment training.",
                    calibration: "Calibration involves epistemic judgment about confidence, knowledge verification processes, future-oriented assessment of reliability, and relational trust-building with AI systems."
                  };
                  
                  return (
                    <div 
                      className="mb-8 p-6 rounded-xl animate-fadeIn"
                      style={{
                        backgroundColor: 'rgba(51, 65, 85, 0.6)',
                        border: `2px solid ${
                          activeEntangledC === 'computation' ? '#7B9FD3' :
                          activeEntangledC === 'composition' ? '#4ECDC4' :
                          activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0'
                        }`,
                        boxShadow: `0 0 20px ${
                          activeEntangledC === 'computation' ? '#7B9FD3' :
                          activeEntangledC === 'composition' ? '#4ECDC4' :
                          activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0'
                        }30`
                      }}
                    >
                      <h3 
                        className="text-xl font-semibold mb-3"
                        style={{ 
                          color: activeEntangledC === 'computation' ? '#7B9FD3' :
                                 activeEntangledC === 'composition' ? '#4ECDC4' :
                                 activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0'
                        }}
                      >
                        {activeEntangledC.charAt(0).toUpperCase() + activeEntangledC.slice(1)} Connections
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {explanations[activeEntangledC]}
                      </p>
                      <p className="text-sm text-gray-400 mt-3 italic">
                        💡 Hover over highlighted dimensions below to see how computational sense-making operates within each.
                      </p>
                    </div>
                  );
                })()}

                <div className="relative bg-slate-800/50 rounded-2xl p-32 border border-slate-700 min-h-[2000px]">
                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="relative">
                      <div className="text-2xl font-bold text-gray-400 mb-2">
                        entangled
                      </div>
                      <div className="text-3xl font-bold text-gray-300 mb-2">
                        dimensions of
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                        AI LITERACY
                      </div>
                    </div>
                  </div>

                  {/* Dimensions */}
                  {(() => {
                    const dimensions = {
                      data: { 
                        label: "DATA", 
                        color: "#7BA05B",
                        icon: Database,
                        position: { top: "1%", left: "35%" },
                        highlightedBy: ['computation'],
                        explanations: {
                          computation: "Data shapes what AI can say—training datasets determine whose voices get amplified and whose get left out. When you read AI outputs computationally, you're asking: What data created this? Whose perspectives are missing? What patterns got baked in?"
                        }
                      },
                      algorithmic: { 
                        label: "ALGORITHMIC", 
                        color: "#D4AF37",
                        icon: Network,
                        position: { top: "1%", right: "35%" },
                        highlightedBy: ['computation'],
                        explanations: {
                          computation: "Algorithms turn data into predictions—they're the logic behind what comes next. Reading algorithmically means seeing outputs as probability, not truth. You ask: How did pattern recognition shape this answer? What gets prioritized when an AI predicts?"
                        }
                      },
                      futures: { 
                        label: "FUTURES", 
                        color: "#9B7BB5",
                        icon: ArrowUpRight,
                        position: { top: "12%", right: "18%" },
                        highlightedBy: ['calibration'],
                        explanations: {
                          calibration: "Calibration in the futures dimension means asking: How reliable will this be over time? When you assess AI predictions about what's coming, you're judging whether to trust its confidence. Does it know what it doesn't know? Whose futures does it imagine?"
                        }
                      },
                      creative: { 
                        label: "CREATIVE", 
                        color: "#C97B84",
                        icon: Sparkles,
                        position: { top: "35%", right: "8%" },
                        highlightedBy: ['composition'],
                        explanations: {
                          composition: "Composition is creative work—you're co-authoring with AI, not just asking questions. When you craft prompts, you shape what's possible. You design the interaction: How can I get something surprising? How do I steer this without controlling it completely?"
                        }
                      },
                      relational: { 
                        label: "RELATIONAL", 
                        color: "#7B6B5B",
                        icon: Users,
                        position: { bottom: "12%", right: "18%" },
                        highlightedBy: ['composition', 'constraints', 'calibration'],
                        explanations: {
                          composition: "AI changes how we relate—it becomes a conversation partner, not just a tool. Through composition, you build back-and-forth dialogue. You learn its tendencies, it adapts to you. This reshapes what 'working with others' means.",
                          constraints: "Constraints shape relationships—AI is trained to be agreeable, to smooth over disagreement, to mirror your tone. When you notice this, you see how alignment training makes AI a certain kind of partner. It can't push back the way a person would.",
                          calibration: "Calibration builds (or breaks) trust in relationships. When AI hedges or sounds confident, that affects whether you believe it, rely on it, or question it. Relational calibration means noticing: Am I trusting this too much? Too little? What kind of relationship am I building?"
                        }
                      },
                      political: { 
                        label: "POLITICAL", 
                        color: "#8B7355",
                        icon: Scale,
                        position: { bottom: "1%", right: "32.5%" },
                        highlightedBy: ['constraints'],
                        explanations: {
                          constraints: "Politics are embedded in code—who gets to decide what AI can say? Constraints show you where policy, power, and profit shape boundaries. When AI refuses something or frames an issue carefully, that's governance at work. Who made these rules? Who benefits?"
                        }
                      },
                      disciplinary: { 
                        label: "DISCIPLINARY", 
                        color: "#5B7C99",
                        icon: Puzzle,
                        position: { bottom: "1%", left: "32.5%" },
                        highlightedBy: ['composition'],
                        explanations: {
                          composition: "Different fields work with AI differently. Through composition, you bring your disciplinary expertise—a biologist prompts differently than a poet. You apply your field's methods for questioning, testing, and sense-making. Discipline shapes how you compose."
                        }
                      },
                      epistemic: { 
                        label: "EPISTEMIC", 
                        color: "#D4691A",
                        icon: Atom,
                        position: { bottom: "12%", left: "18%" },
                        highlightedBy: ['computation', 'constraints', 'calibration'],
                        explanations: {
                          computation: "Computation reveals the limits of knowing—what can be learned from patterns versus what needs lived experience. When you read computationally, you see where AI hits boundaries: What can't be predicted? What requires judgment, not calculation?",
                          constraints: "Constraints bound what can be known or said. Some limits are technical (the model wasn't trained on that), some are policy (it won't discuss that). Epistemically, constraints show you where knowledge ends—not just what AI won't say, but what it can't know.",
                          calibration: "Epistemic calibration asks: How do we know what we know? When AI sounds certain, is it? When it hedges, should you trust the hedge? You're constantly judging how confident to be about what you're learning. It's about knowing the limits."
                        }
                      },
                      knowledge: { 
                        label: "KNOWLEDGE-CONSTRUCTION", 
                        color: "#B85042",
                        icon: Wrench,
                        position: { top: "35%", left: "8%" },
                        highlightedBy: ['computation', 'composition', 'calibration'],
                        explanations: {
                          computation: "Knowledge gets built from patterns—not discovered, but constructed through repetition and statistical weight. When you read computationally, you see AI outputs as assembled information, not facts. You ask: How was this 'knowledge' put together? What's it really saying?",
                          composition: "Through composition, you actively build knowledge—prompting, testing, refining. You're not just asking questions; you're scaffolding understanding across multiple exchanges. Each interaction shapes what comes next. You're constructing meaning together.",
                          calibration: "Calibration means checking whether 'knowledge' holds up. You verify, test, compare to other sources. In knowledge construction, calibration is ongoing: Does this make sense? Can I trust it? Where do I need to look deeper? It's about quality control."
                        }
                      },
                      ecological: { 
                        label: "ECOLOGICAL", 
                        color: "#6B9080",
                        icon: Globe,
                        position: { top: "12%", left: "18%" },
                        highlightedBy: ['constraints'],
                        explanations: {
                          constraints: "AI exists in physical systems—servers, energy, resources. Constraints reveal this material reality: every output has an environmental cost. When you think ecologically about constraints, you see how computation's boundaries include planetary ones. What's the real cost of this technology?"
                        }
                      }
                    };

                    return Object.entries(dimensions).map(([key, dim]) => {
                      const Icon = dim.icon;
                      const highlighted = activeEntangledC !== 'card' && dim.highlightedBy.includes(activeEntangledC);
                      const isHovered = hoveredDimension === key;
                      
                      return (
                        <div
                          key={key}
                          className="absolute transition-all duration-500"
                          style={{
                            ...dim.position,
                            transform: highlighted ? 'scale(1.15)' : 'scale(1)',
                            zIndex: highlighted ? 10 : (isHovered ? 20 : 1)
                          }}
                          onMouseEnter={() => highlighted && setHoveredDimension(key)}
                          onMouseLeave={() => setHoveredDimension(null)}
                        >
                          <div className="relative cursor-pointer">
                            <div
                              className="px-5 py-3 rounded-full font-semibold text-xs transition-all duration-500 shadow-lg flex items-center gap-2"
                              style={{
                                backgroundColor: highlighted 
                                  ? dim.color 
                                  : 'rgba(71, 85, 105, 0.5)',
                                border: highlighted 
                                  ? `3px solid ${
                                      activeEntangledC === 'computation' ? '#7B9FD3' :
                                      activeEntangledC === 'composition' ? '#4ECDC4' :
                                      activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0'
                                    }` 
                                  : `2px solid ${dim.color}80`,
                                color: highlighted ? '#fff' : '#cbd5e1',
                                boxShadow: highlighted 
                                  ? `0 0 40px ${dim.color}80, 0 0 60px ${
                                      activeEntangledC === 'computation' ? '#7B9FD3' :
                                      activeEntangledC === 'composition' ? '#4ECDC4' :
                                      activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0'
                                    }60` 
                                  : `0 4px 10px rgba(0,0,0,0.2)`,
                                opacity: activeEntangledC !== 'card' && !highlighted ? 0.3 : 1
                              }}
                            >
                              <Icon size={16} className="flex-shrink-0" />
                              <span className="whitespace-nowrap">{dim.label}</span>
                            </div>
                            
                            {/* Hover explanation */}
                            {isHovered && highlighted && dim.explanations[activeEntangledC] && (
                              <div 
                                className="absolute mt-2 p-4 bg-slate-900 border-2 rounded-lg shadow-2xl z-50 animate-fadeIn w-80"
                                style={{
                                  borderColor: activeEntangledC === 'computation' ? '#7B9FD3' :
                                             activeEntangledC === 'composition' ? '#4ECDC4' :
                                             activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  top: '100%',
                                  marginTop: '8px'
                                }}
                              >
                                <div className="text-xs text-gray-300 leading-relaxed">
                                  {dim.explanations[activeEntangledC]}
                                </div>
                                <div 
                                  className="absolute w-3 h-3 transform rotate-45 -top-1.5 left-1/2 -translate-x-1/2"
                                  style={{
                                    backgroundColor: 'rgb(15, 23, 42)',
                                    borderLeft: `2px solid ${
                                      activeEntangledC === 'computation' ? '#7B9FD3' :
                                      activeEntangledC === 'composition' ? '#4ECDC4' :
                                      activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0'
                                    }`,
                                    borderTop: `2px solid ${
                                      activeEntangledC === 'computation' ? '#7B9FD3' :
                                      activeEntangledC === 'composition' ? '#4ECDC4' :
                                      activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0'
                                    }`
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    });
                  })()}

                  {/* Connecting Lines */}
                  {activeEntangledC !== 'card' && (
                    <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                      {(() => {
                        const centerX = 50;
                        const centerY = 50;
                        const lineColor = activeEntangledC === 'computation' ? '#7B9FD3' :
                                        activeEntangledC === 'composition' ? '#4ECDC4' :
                                        activeEntangledC === 'constraints' ? '#FFB84D' : '#B695C0';
                        
                        const dimensionPositions = {
                          data: { x: 35, y: 1 },
                          algorithmic: { x: 65, y: 1 },
                          futures: { x: 82, y: 12 },
                          creative: { x: 92, y: 35 },
                          relational: { x: 82, y: 88 },
                          political: { x: 67.5, y: 99 },
                          disciplinary: { x: 32.5, y: 99 },
                          epistemic: { x: 18, y: 88 },
                          knowledge: { x: 8, y: 35 },
                          ecological: { x: 18, y: 12 }
                        };
                        
                        const activeDims = {
                          computation: ['data', 'algorithmic', 'knowledge', 'epistemic'],
                          composition: ['creative', 'relational', 'disciplinary', 'knowledge'],
                          constraints: ['political', 'ecological', 'epistemic', 'relational'],
                          calibration: ['epistemic', 'knowledge', 'futures', 'relational']
                        };
                        
                        return activeDims[activeEntangledC]?.map((dimKey) => {
                          const pos = dimensionPositions[dimKey];
                          if (!pos) return null;
                          
                          return (
                            <line
                              key={dimKey}
                              x1={`${centerX}%`}
                              y1={`${centerY}%`}
                              x2={`${pos.x}%`}
                              y2={`${pos.y}%`}
                              stroke={lineColor}
                              strokeWidth="2"
                              strokeOpacity="0.4"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                          );
                        });
                      })()}
                    </svg>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-slate-700/50">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Copyright and License */}
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <span className="text-lg">©</span>
              <span>2025 Rachel Horst</span>
              <span className="text-gray-500">|</span>
              <a 
                href="https://creativecommons.org/licenses/by/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-teal-300 transition-colors"
              >
                <span className="font-semibold">CC BY 4.0</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">CC</text>
                </svg>
              </a>
            </div>

            {/* Citation */}
            <div className="text-center text-sm text-gray-400">
              <p className="font-semibold text-gray-300 mb-1">Suggested Citation:</p>
              <p className="italic">
                Horst, R. (2025). <span className="text-gray-300">The 4 Cs of Computational Sense-Making: A framework for making informed and critical meaning with AI outputs.</span>
              </p>
            </div>

            {/* License Info */}
            <div className="text-center text-xs text-gray-500">
              <p>Licensed under Creative Commons Attribution 4.0 International</p>
              <p className="mt-1">You are free to share and adapt this material with appropriate attribution.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.3;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-fast {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes flow {
          0% {
            stroke-dasharray: 0, 100;
          }
          100% {
            stroke-dasharray: 100, 0;
          }
        }
        
        @keyframes flow-fast {
          0% {
            stroke-dasharray: 0, 100;
          }
          100% {
            stroke-dasharray: 100, 0;
          }
        }
        
        @keyframes spin-medium {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            box-shadow: 0 0 0 0 currentColor;
          }
          50% {
            box-shadow: 0 0 0 3px currentColor;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 4s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }
        
        .animate-flow {
          animation: flow 5s linear infinite;
          stroke-dasharray: 100;
        }
        
        .animate-flow-fast {
          animation: flow-fast 2s linear infinite;
          stroke-dasharray: 100;
        }
        
        .animate-spin-medium {
          animation: spin-medium 15s linear infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default FourCsFramework;
