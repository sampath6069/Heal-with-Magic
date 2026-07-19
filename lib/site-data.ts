export const services = [
  {
    name: "Ho'oponopono Healing",
    description:
      "A heart-centered healing session focused on forgiveness, emotional release, and returning to a deep sense of inner peace.",
  },
  {
    name: "Law of Attraction Coaching",
    description:
      "Supportive coaching to align your thoughts, emotions, and energy with the love, abundance, and life you truly desire.",
  },
  {
    name: "Relationship Healing",
    description:
      "Gentle guidance to heal emotional pain, strengthen self-love, and create healthier, more peaceful relationship patterns.",
  },
  {
    name: "Money Healing",
    description:
      "Transform blocks around worthiness, receiving, and abundance so you can feel more open, secure, and supported financially.",
  },
  {
    name: "NLP Transformation",
    description:
      "Practical subconscious reprogramming to shift limiting patterns, build confidence, and create lasting inner change.",
  },
  {
    name: "Aura Clearing",
    description:
      "An energetic cleansing experience designed to release heaviness, restore balance, and help you feel lighter and clearer.",
  },
] as const;

export const contactDetails = {
  name: "Shamitha Venkat",
  email: "magical.universe.222@gmail.com",
  phone: "9686525789",
  instagram: "@healwithmagic (coming soon)",
  whatsappNumber: "919686525789",
  whatsappLink: "https://wa.me/919686525789",
  instagramLink: "",
  bookingLink:
    "https://wa.me/919686525789?text=Hello%20Shamitha%2C%20I%20would%20like%20to%20book%20a%20free%20session.",
} as const;

export const programs = [
  {
    name: "Group Healing for Career and Money",
    duration: "21 Days",
    price: "Rs. 999",
    paymentLink: "https://rzp.io/rzp/5riZg4o",
    joinLabel: "Join This Program",
    paymentNote:
      "After payment, you can continue on WhatsApp to receive joining guidance and the next instructions.",
    featured: true,
    description:
      "A 21-day group healing journey focused on career growth, money blocks, abundance, and energetic alignment.",
    idealFor: [
      "Feeling stuck in career progress",
      "Repeating money stress or fear",
      "Wanting more confidence in receiving and growth",
    ],
    outcome: "Clarity, abundance mindset, and stronger career energy",
  },
  {
    name: "Group Healing for Health and Relationships",
    duration: "21 Days",
    price: "Rs. 999",
    paymentLink: "https://rzp.io/rzp/Knio3WE",
    joinLabel: "Join This Program",
    paymentNote:
      "After payment, you can continue on WhatsApp to receive joining guidance and the next instructions.",
    featured: false,
    description:
      "A 21-day group healing journey created to support emotional well-being, health, inner balance, and relationship healing.",
    idealFor: [
      "Emotional heaviness affecting daily life",
      "Relationship stress or repeated misunderstandings",
      "Wanting more peace, balance, and connection",
    ],
    outcome: "Emotional calm, softer relationships, and inner balance",
  },
  {
    name: "One-to-One Healing",
    duration: "21 Days",
    price: "Rs. 9999",
    paymentLink: "https://rzp.io/rzp/BeObdQ12",
    joinLabel: "Join This Program",
    paymentNote:
      "After payment, you can continue on WhatsApp to receive joining guidance and the next instructions.",
    featured: false,
    description:
      "A personalized 21-day private healing experience with focused one-to-one guidance for deeper transformation and support.",
    idealFor: [
      "Needing private personal guidance",
      "Going through a more sensitive life challenge",
      "Wanting deeper support and direct healing attention",
    ],
    outcome: "Personalized support, deeper release, and dedicated guidance",
  },
  {
    name: "Chakra Healing",
    duration: "21 Days",
    price: "Rs. 1122",
    paymentLink: getProgramInquiryLink("Chakra Healing"),
    joinLabel: "Ask to Join",
    featured: false,
    description:
      "A 21-day group healing journey focused on balancing the chakras, clearing energetic heaviness, and helping you feel more grounded, open, and aligned.",
    idealFor: [
      "Feeling energetically blocked or drained",
      "Wanting more inner balance and emotional steadiness",
      "Seeking gentle chakra support and energetic clarity",
    ],
    outcome: "Better energetic balance, emotional lightness, and inner alignment",
    paymentNote: "For this program, joining details and payment guidance are currently shared on WhatsApp first.",
  },
] as const;

export function getProgramInquiryLink(programName: string) {
  const lines = [
    "Hello Heal with Magic team,",
    `I am interested in the "${programName}" program.`,
    "I would like to ask a few questions before joining.",
  ];

  return `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const testimonials = [
  {
    name: "Priya",
    result: "Felt more peaceful",
    quote:
      "After the session, I honestly felt much lighter. Shamitha listened very patiently and made me feel calm and peaceful.",
  },
  {
    name: "Sneha",
    result: "Emotional healing",
    quote:
      "I was going through a very difficult phase, and speaking to Shamitha gave me a lot of comfort and clarity. I felt truly supported.",
  },
  {
    name: "Aarthi",
    result: "More confidence",
    quote:
      "Shamitha has a very kind and gentle way of guiding. After the session, I felt more clear in my mind and more confident in myself.",
  },
] as const;

export const faqs = [
  {
    question: "Are the sessions online or offline?",
    answer:
      "The healing support is offered online, so you can join from wherever you are in a calm and private space.",
  },
  {
    question: "What happens after I book a free session?",
    answer:
      "When you click Book a Free Session, WhatsApp opens directly so you can chat with Shamitha and continue the conversation personally from there.",
  },
  {
    question: "What happens after I pay for a program?",
    answer:
      "After payment, you can reach out on WhatsApp and you will receive the joining details, next instructions, and guidance on how your 21-day journey begins.",
  },
  {
    question: "How do I know which program is right for me?",
    answer:
      "If you are unsure, start with the free session on WhatsApp. That makes it easy to explain what you are going through and receive guidance before choosing a program.",
  },
  {
    question: "Is one-to-one healing more private?",
    answer:
      "Yes. One-to-one healing is better for people who want more focused personal support, privacy, and deeper guidance over the 21-day period.",
  },
  {
    question: "Can I ask questions before paying?",
    answer:
      "Yes. You can use the Ask Before Joining option, WhatsApp, email, or the free session flow to ask questions before joining any program.",
  },
] as const;

export const bookingSteps = [
  {
    title: "Open WhatsApp",
    description:
      "Click the free-session button and WhatsApp opens directly with your booking message already prepared.",
  },
  {
    title: "Start the conversation",
    description:
      "Chat with Shamitha personally, share what you need help with, and ask any first questions you may have.",
  },
  {
    title: "Receive your next step",
    description:
      "You can then receive guidance toward the right free session, program, or healing path.",
  },
] as const;

export const blogPosts = [
  {
    category: "Emotional Healing",
    title: "How to create a nightly ritual for peace and release",
    excerpt:
      "A simple and calming evening ritual to quiet the mind, soften emotional tension, and end the day with intention.",
  },
  {
    category: "Manifestation",
    title: "A gentle way to work with desire and abundance",
    excerpt:
      "Discover how softness, trust, and emotional alignment can support more natural and meaningful manifestations.",
  },
  {
    category: "Self-Worth",
    title: "Three signs your healing journey is already working",
    excerpt:
      "Real healing often begins with subtle inner shifts. Learn how to recognize the signs of meaningful transformation.",
  },
] as const;
