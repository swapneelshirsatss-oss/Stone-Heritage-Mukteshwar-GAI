const fs = require('fs');
const file = 'src/components/react-pages/Stay.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /const rooms = \[\s*\{[\s\S]*?\}\s*\];/;

const newRooms = `const rooms = [
  { name: "Stonewood Family Retreat", type: "Standalone Premium Suite", bedType: "2 Large King Beds", idealFor: "Multi-generational families, large groups", amenities: "Private Balcony, Wi-Fi", image: "/stonewood-family-retreat.webp", alt: "Stonewood Family Retreat with two king beds for multi-generational stays" },
  { name: "Brass Room", type: "Quadroom", bedType: "1 King Bed + Floor Mattress", idealFor: "Families with young children", amenities: "En-suite Bathroom, Wi-Fi", image: "/brass-room-homestay-in-mukteshwar.webp", alt: "Brass Room featuring a king-size bed and scenic mountain views at Stone Heritage Mukteshwar" },
  { name: "Copper Room", type: "Spacious Family Room", bedType: "1 King Bed + 1 Single Bed", idealFor: "Small families (3 persons)", amenities: "En-suite Bathroom, Wi-Fi", image: "/copper-room.webp", alt: "Spacious Copper Room interior, perfect for families visiting Stone Heritage homestay" },
  { name: "The Vintage Room", type: "Heritage Room", bedType: "1 Ultra-comfortable King Bed", idealFor: "Couples, families seeking authentic architecture", amenities: "Heritage Architecture, Wi-Fi", image: "/vintage-room.webp", alt: "The Vintage Room showing classic heritage architecture and cozy bedding" },
  { name: "Stone & Story Room", type: "Standard Room", bedType: "1 King Bed", idealFor: "Couples, families", amenities: "Premium Setup, Wi-Fi", image: "/stonewood-family-retreat-1.webp", alt: "Stone and Story Suite offering premium comfort and a relaxing atmosphere in Mukteshwar" },
  { name: "Iron Room", type: "Standard Room", bedType: "1 King Bed", idealFor: "Couples", amenities: "En-suite Bathroom, Wi-Fi", image: "/iron-room.webp", alt: "Cozy Iron Room setup, ideal for couples staying at Stone Heritage" },
  { name: "Cedar Room", type: "Economy Room", bedType: "1 King Bed", idealFor: "Solo travelers", amenities: "Wooden Paneling, Wi-Fi", image: "/cedar-room.webp", alt: "Cedar Room interior with beautiful wooden paneling and natural light" }
];`;

content = content.replace(regex, newRooms);

// Update table headers
content = content.replace('<th className="p-4 font-semibold border-b border-stone-200">Capacity</th>', '<th className="p-4 font-semibold border-b border-stone-200">Type</th>');
content = content.replace('<th className="p-4 font-semibold border-b border-stone-200">View</th>', '<th className="p-4 font-semibold border-b border-stone-200">Ideal For</th>');

// Update table body
content = content.replace('<td className="p-4">{room.capacity}</td>', '<td className="p-4">{room.type}</td>');
content = content.replace('<td className="p-4">{room.view}</td>', '<td className="p-4">{room.idealFor}</td>');

// Update cards
content = content.replace('<li>Capacity: {room.capacity}</li>', '<li>Type: {room.type}</li>');
content = content.replace('<li>View: {room.view}</li>', '<li>Ideal For: {room.idealFor}</li>');

fs.writeFileSync(file, content);
console.log("Stay.tsx patched with new rooms!");
