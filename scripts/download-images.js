const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'locations');

// Ensure public/locations directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Hand-picked high-quality Unsplash image IDs to get crisp, high-res photos
const images = [
  {
    filename: 'gst-reg.jpg',
    id: 'photo-1454165804606-c3d57bc86b40', // Corporate document meeting
  },
  {
    filename: 'company-reg.jpg',
    id: 'photo-1450133064473-71024230f91b', // Business registration
  },
  {
    filename: 'delhi.jpg',
    id: 'photo-1587474260584-136574528ed5', // India Gate, Delhi
  },
  {
    filename: 'noida.jpg',
    id: 'photo-1497366216548-37526070297c', // Modern office lobby
  },
  {
    filename: 'gurgaon.jpg',
    id: 'photo-1562790351-d273a961e0e9', // CyberCity Gurugram (works!)
  },
  {
    filename: 'bangalore.jpg',
    id: 'photo-1497215728101-856f4ea42174', // Modern corporate building/office
  },
  {
    filename: 'mumbai-gst.jpg',
    id: 'photo-1566552881560-0be862a7c445', // Mumbai (works!)
  },
  {
    filename: 'rohini.jpg',
    id: 'photo-1568605114967-8130f3a36994', // Modern commercial complex (works!)
  },
  {
    filename: 'pitampura.jpg',
    id: 'photo-1486406146926-c627a92ad1ab', // Commercial office high-rise (works!)
  },
  {
    filename: 'hyderabad.jpg',
    id: 'photo-1497215728101-856f4ea42174', // Modern high-rise business building
  },
  {
    filename: 'ahmedabad.jpg',
    id: 'photo-1497366811353-6870744d04b2', // Business center office
  },
  {
    filename: 'chennai.jpg',
    id: 'photo-1582510003544-4d00b7f74220', // Chennai IT Park/Street (works!)
  },
  {
    filename: 'chandigarh.jpg',
    id: 'photo-1497366754035-f200968a6e72', // Sleek modern office space
  },
  {
    filename: 'himachal.jpg',
    id: 'photo-1464822759023-fed622ff2c3b', // Beautiful mountains (Himachal)
  },
  {
    filename: 'jammu.jpg',
    id: 'photo-1501785888041-af3ef285b470', // Beautiful scenery (Jammu)
  },
  {
    filename: 'delhi-gst.jpg',
    id: 'photo-1589829545856-d10d557cf95f', // Legal court/office scale (works!)
  },
  {
    filename: 'kolkata.jpg',
    id: 'photo-1558431382-27e303142255', // Howrah Bridge, Kolkata (works!)
  },
  {
    filename: 'navi-mumbai.jpg',
    id: 'photo-1542838132-92c53300491e', // Modern Navi Mumbai buildings (works!)
  },
  {
    filename: 'ranchi.jpg',
    id: 'photo-1506744038136-46273834b3fb', // Ranchi green valley/hills
  },
  {
    filename: 'goa.jpg',
    id: 'photo-1507525428034-b723cf961d3e', // Goa beachside / workspace vibe (works!)
  },
];

function downloadImage(url, dest, callback) {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      callback(new Error(`Failed to get image, status code: ${response.statusCode}`));
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close(callback);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    callback(err);
  });
}

function processImages(index = 0) {
  if (index >= images.length) {
    console.log('🎉 All location images have been downloaded successfully!');
    return;
  }

  const img = images[index];
  const destPath = path.join(targetDir, img.filename);
  const unsplashUrl = `https://images.unsplash.com/${img.id}?auto=format&fit=crop&w=800&h=500&q=80`;

  console.log(`Downloading ${img.filename} (${index + 1}/${images.length})...`);
  downloadImage(unsplashUrl, destPath, (err) => {
    if (err) {
      console.error(`❌ Error downloading ${img.filename}:`, err.message);
    } else {
      console.log(`✅ Finished downloading ${img.filename}`);
    }
    // Proceed to next image
    setTimeout(() => processImages(index + 1), 500);
  });
}

processImages();
