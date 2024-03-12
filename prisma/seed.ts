import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const events = [
  {
    id: 1,
    name: "Helsinki DJ Night",
    slug: "helsinki-dj-night",
    city: "Helsinki",
    location: "Helsinki Music Hall",
    date: "2030-10-12T00:00:00.000Z",
    organizerName: "DJ Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Join us for an immersive DJ practice session at the Helsinki Beats Workshop! Whether you're a beginner aspiring to spin the decks or an experienced DJ looking to refine your skills, this event is tailored just for you. Dive into the world of beats, mixes, and electronic rhythms under the guidance of seasoned DJs and music producers. Showcase your skills during our open decks session. Share your favorite tracks, experiment with live remixing, and receive applause and feedback from a supportive audience.",
  },
  {
    id: 2,
    name: "Vaasa Music Festival",
    slug: "vaasa-music-festival",
    city: "Vaasa",
    location: "Vaasa Convention Center",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "Music Enthusiasts LLC",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Vaasa Music Festival is a celebration of all music genres, bringing together musicians, artists, and music enthusiasts from around the world. Experience a day filled with live performances, interactive workshops, and a vibrant atmosphere of creativity and harmony. Join us for an unforgettable musical journey!",
  },
  {
    id: 3,
    name: "Tampere 3D Animation Workshop",
    slug: "tampere-3d-animation-workshop",
    city: "Tampere",
    location: "Tampere Convention Center",
    date: "2030-12-08T00:00:00.000Z",
    organizerName: "3D Animators Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Dive into the captivating world of 3D animation at our exclusive 3D Animation Masterclass in Tampere! Whether you're an aspiring animator, a student studying animation, or a professional looking to enhance your skills, this workshop offers a unique opportunity to learn from industry experts and elevate your animation prowess.",
  },
  {
    id: 4,
    name: "Turku Rock Night",
    slug: "turku-rock-night",
    city: "Turku",
    location: "Turku Music Hall",
    date: "2030-11-18T00:00:00.000Z",
    organizerName: "Rock On Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Get ready to rock out at Turku Rock Night Concert! Experience electrifying performances by top rock bands, enjoy high-energy music, and immerse yourself in an unforgettable night of pure rock and roll.",
  },
  {
    id: 5,
    name: "Vaasa Artisan Craft Fair",
    slug: "vaasa-artisan-craft-fair",
    city: "Vaasa",
    location: "Vaasa Exhibition Center",
    date: "2030-12-01T00:00:00.000Z",
    organizerName: "Craftsmanship Guild",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Discover unique handmade crafts and artworks at the Vaasa Artisan Craft Fair. Meet talented artisans, shop for one-of-a-kind items, and support local craftsmanship. Join us for a day of creativity and craftsmanship.",
  },
  {
    id: 6,
    name: "Tampere Jazz Fusion Night",
    slug: "tampere-jazz-fusion-night",
    city: "Tampere",
    location: "Tampere Jazz Lounge",
    date: "2030-11-29T00:00:00.000Z",
    organizerName: "Groove Masters Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Indulge in the smooth melodies and rhythmic beats of jazz fusion at Tampere Jazz Fusion Night. Experience world-class jazz performances, savor delicious cocktails, and immerse yourself in the soulful ambiance of live jazz music.",
  },
  {
    id: 7,
    name: "Turku Indie Music Showcase",
    slug: "turku-indie-music-showcase",
    city: "Turku",
    location: "Turku Indie Spot",
    date: "2030-11-25T00:00:00.000Z",
    organizerName: "Indie Vibes Records",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Discover the next big indie artists at the Turku Indie Music Showcase. Experience live performances by emerging talents, support independent music, and be part of a vibrant community of music enthusiasts and artists.",
  },
  {
    id: 8,
    name: "Helsinki Global Food Festival",
    slug: "helsinki-global-food-festival",
    city: "Helsinki",
    location: "Helsinki Waterfront Park",
    date: "2030-10-30T00:00:00.000Z",
    organizerName: "Foodie Ventures Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Embark on a culinary journey around the world at the Helsinki Global Food Festival. Delight your taste buds with international cuisines, cooking demonstrations, and food tastings. Experience the flavors of different cultures in one delicious event.",
  },
  {
    id: 9,
    name: "Vaasa Tech Innovators Summit",
    slug: "vaasa-tech-innovators-summit",
    city: "Vaasa",
    location: "Vaasa Convention Center",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "InnovateTech Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "The Vaasa Tech Innovators Summit is where visionaries, entrepreneurs, and tech enthusiasts converge. Explore the latest technological advancements, attend insightful keynotes from industry leaders, and participate in hands-on workshops. Connect with innovators, pitch your ideas, and be a part of shaping the future of technology.",
  },
  {
    id: 10,
    name: "Turku Enchanted Garden Gala",
    slug: "turku-enchanted-garden-gala",
    city: "Turku",
    location: "Turku Museum of Art",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Cultural Garden Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Step into a world of wonder at the Turku Enchanted Garden Gala, a magical evening of art, music, and fantasy. Explore enchanting garden installations, experience live performances by world-class musicians and dancers, and indulge in gourmet delicacies. Dress in your most glamorous attire and immerse yourself in a night of elegance and enchantment.",
  },
  {
    id: 11,
    name: "Tampere Comedy Extravaganza",
    slug: "tampere-comedy-extravaganza",
    city: "Tampere",
    location: "Tampere Laugh Factory",
    date: "2030-11-06T00:00:00.000Z",
    organizerName: "Laugh Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Prepare for a night of laughter with top comedians from around the world at the Tampere Comedy Extravaganza. Enjoy stand-up, improv, and sketches that will have you in stitches!",
  },
  {
    id: 12,
    name: "Turku Science and Space Expo",
    slug: "turku-science-space-expo",
    city: "Turku",
    location: "Turku Science Center",
    date: "2030-10-29T00:00:00.000Z",
    organizerName: "Cosmic Explorers Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Explore the wonders of science and space at the Turku Science and Space Expo. Engage in hands-on experiments, meet scientists, and learn about the mysteries of the universe.",
  },
  {
    id: 13,
    name: "Helsinki Fashion Runway",
    slug: "helsinki-fashion-runway",
    city: "Helsinki",
    location: "Helsinki Fashion Week Venue",
    date: "2030-11-12T00:00:00.000Z",
    organizerName: "Chic Trends Agency",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Witness the latest trends on the runway at the Helsinki Fashion Runway. Top designers will showcase their collections, setting the stage for the future of fashion.",
  },
  {
    id: 14,
    name: "Vaasa Culinary Masterclass",
    slug: "vaasa-culinary-masterclass",
    city: "Vaasa",
    location: "Vaasa Epicurean Institute",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Gourmet Chefs Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Join renowned chefs for a culinary journey in Vaasa. Learn cooking techniques, taste exquisite dishes, and elevate your skills in the art of gastronomy.",
  },
  {
    id: 15,
    name: "Tampere Film Buffs Symposium",
    slug: "tampere-film-buffs-symposium",
    city: "Tampere",
    location: "Tampere Film Institute",
    date: "2030-11-08T00:00:00.000Z",
    organizerName: "Cinema Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "A gathering for film enthusiasts in Tampere! Screen classic movies, engage in discussions with filmmakers, and gain insights into the world of cinema.",
  },
  {
    id: 16,
    name: "Turku Literary Salon",
    slug: "turku-literary-salon",
    city: "Turku",
    location: "Turku & Co. Bookstore",
    date: "2030-12-15T00:00:00.000Z",
    organizerName: "Words Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Celebrate the written word at this literary gathering in Turku. Listen to readings by acclaimed authors, participate in book discussions, and embrace the magic of storytelling.",
  },
  {
    id: 17,
    name: "Helsinki Wellness Expo",
    slug: "helsinki-wellness-expo",
    city: "Helsinki",
    location: "Helsinki Convention Center",
    date: "2030-11-30T00:00:00.000Z",
    organizerName: "Wellness Warriors Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Immerse yourself in the world of fitness and well-being in Helsinki. Attend fitness classes, learn about nutrition, and explore holistic approaches to health.",
  },
  {
    id: 18,
    name: "Vaasa Dance Fusion Festival",
    slug: "vaasa-dance-fusion-festival",
    city: "Vaasa",
    location: "Vaasa Street Dance Studio",
    date: "2024-11-28T00:00:00.000Z",
    organizerName: "Rhythm Revolution",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Experience a blend of dance styles from around the world. Participate in dance workshops, watch electrifying performances, and dance the night away.",
  },
  {
    id: 19,
    name: "Turku Nature Photography Exhibition",
    slug: "turku-nature-photography-exhibition",
    city: "Turku",
    location: "Turku Art Center",
    date: "2024-12-10T00:00:00.000Z",
    organizerName: "Captured Moments",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Immerse yourself in the beauty of nature through captivating photographs. Explore the Turku Nature Photography Exhibition, showcasing stunning images from talented photographers. Gain a deeper appreciation for the wonders of the natural world.",
  },
  {
    id: 20,
    name: "Helsinki Comedy Extravaganza",
    slug: "helsinki-comedy-extravaganza",
    city: "Helsinki",
    location: "Helsinki Laugh Factory",
    date: "2024-11-06T00:00:00.000Z",
    organizerName: "Laugh Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Prepare for a night of laughter with top comedians from around the world. Enjoy stand-up, improv, and sketches that will have you in stitches!",
  },
  {
    id: 21,
    name: "Tampere Science and Space Expo",
    slug: "tampere-science-space-expo",
    city: "Tampere",
    location: "Tampere Science Center",
    date: "2024-10-29T00:00:00.000Z",
    organizerName: "Cosmic Explorers Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Explore the wonders of science and space at this interactive expo. Engage in hands-on experiments, meet scientists, and learn about the mysteries of the universe.",
  },
  {
    id: 22,
    name: "Turku Fashion Runway",
    slug: "turku-fashion-runway",
    city: "Turku",
    location: "Turku Fashion Week Venue",
    date: "2024-11-12T00:00:00.000Z",
    organizerName: "Chic Trends Agency",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Witness the latest trends on the runway. Top designers will showcase their collections, setting the stage for the future of fashion.",
  },
  {
    id: 23,
    name: "Vaasa Culinary Experience",
    slug: "vaasa-culinary-experience",
    city: "Vaasa",
    location: "Vaasa Epicurean Institute",
    date: "2024-12-02T00:00:00.000Z",
    organizerName: "Gourmet Chefs Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Join renowned chefs for a culinary journey. Learn cooking techniques, taste exquisite dishes, and elevate your skills in the art of gastronomy.",
  },
  {
    id: 24,
    name: "Helsinki Film Buffs Symposium",
    slug: "helsinki-film-buffs-symposium",
    city: "Helsinki",
    location: "Helsinki Film Institute",
    date: "2024-11-08T00:00:00.000Z",
    organizerName: "Cinema Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "A gathering for film enthusiasts! Screen classic movies, engage in discussions with filmmakers, and gain insights into the world of cinema.",
  },
  {
    id: 25,
    name: "Turku Literary Salon",
    slug: "turku-literary-salon",
    city: "Turku",
    location: "Turku & Co. Bookstore",
    date: "2024-12-15T00:00:00.000Z",
    organizerName: "Words Society",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Celebrate the written word at this literary gathering. Listen to readings by acclaimed authors, participate in book discussions, and embrace the magic of storytelling.",
  },
  {
    id: 26,
    name: "Helsinki Wellness Expo",
    slug: "helsinki-wellness-expo",
    city: "Helsinki",
    location: "Helsinki Convention Center",
    date: "2024-11-30T00:00:00.000Z",
    organizerName: "Wellness Warriors Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Immerse yourself in the world of fitness and well-being. Attend fitness classes, learn about nutrition, and explore holistic approaches to health.",
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const event of events) {
    const result = await prisma.eventoEvent.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
