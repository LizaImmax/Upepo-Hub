# Upepo Hub 🪩

**The central digital space connecting all Upepo services**

Upepo Hub is a unified access point for the entire Upepo ecosystem, providing a seamless way to navigate between all Upepo platforms, view community activity, manage events, and stay updated with the latest announcements.

## 🌟 Features

### 🏠 Portal & Homepage
- Central navigation hub linking all 13 Upepo services (including Hub itself)
- Beautiful gradient cards with category filtering
- **Predictive search** with real-time results across services, events, and pages
- Quick action CTAs and onboarding flow

### 🔍 Smart Search
- **Real-time predictive search** across all Upepo platforms
- Search services, events, announcements, and pages
- Visual results with emojis and category tags
- Keyboard-friendly with auto-complete

### 🪩 Hub Branding
- Custom animated Hub logo (disco ball 🪩)
- Gradient brand identity (purple → pink → orange)
- Consistent visual language across all components

### 🚀 Onboarding & Education
- **"How It Works"** section explaining the ecosystem
- **"Getting Started"** with quick action cards
- **Community testimonials** carousel
- Feature highlights and value propositions

### 📊 Community Dashboard
- Real-time community statistics (12,847+ members)
- Active projects tracking (342+ projects)
- Activity feed showing recent community achievements
- Quick links to all Upepo services

### 📅 Events Management
- Upcoming events calendar
- Event registration with capacity tracking
- Workshop, meetup, and ceremony listings
- Date, time, location, and attendee information

### 📢 Announcements System
- Priority-based announcements (high, medium, low)
- Categorized updates (Platform, Update, Opportunity, Event)
- Visual indicators for announcement importance
- Chronological feed

## 🎯 Upepo Ecosystem

The Hub connects these 13 Upepo services (including itself):

| Service | Emoji | Category | Description |
|---------|-------|----------|-------------|
| **Upepo Hub** | 🪩 | Core | Central gateway connecting all Upepo services |
| **Upepo Cloud** | ☁️ | Core | Cloud infrastructure and hosting solutions |
| **Upepo Learn** | 🎓 | Education | Educational resources and learning platform |
| **Upepo Voices** | 🎙️ | Community | Podcast and audio content platform |
| **Upepo Labs** | 🧪 | Innovation | Research and experimentation hub |
| **Upepo Foundation** | ❤️ | Community | Social impact and community support |
| **Upepo Network** | 🌍 | Community | Global community and connections |
| **Upepo Studio** | 🎬 | Core | Video production and creative content |
| **Upepo Academy** | 🧭 | Education | Professional training and certification |
| **Upepo Space** | 🌀 | Innovation | Innovation and collaboration workspace |
| **Upepo Insights** | 💫 | Core | Data analytics and business intelligence |
| **Upepo Ventures** | 🚀 | Innovation | Startup incubation and investment |
| **Upepo Exchange** | 💼 | Core | Marketplace and trading platform |

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LizaImmax/Upepo-Hub.git
   cd Upepo-Hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
Upepo-Hub/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── dashboard/          # Dashboard page
│   │   ├── events/             # Events page
│   │   └── announcements/      # Announcements page
│   ├── components/             # React components
│   │   ├── Navigation.tsx      # Main navigation
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ComponentGrid.tsx   # Service grid
│   │   ├── StatsOverview.tsx   # Statistics cards
│   │   ├── EventsSection.tsx   # Events preview
│   │   └── AnnouncementsSection.tsx
│   ├── config/                 # Configuration files
│   │   └── upepo.ts            # Upepo services config
│   └── data/                   # Mock data
│       └── mockData.ts         # Events, announcements, stats
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Customization

### Update Upepo Services
Edit `src/config/upepo.ts` to modify service links, descriptions, or add new services.

### Modify Mock Data
Update `src/data/mockData.ts` to change events, announcements, or statistics.

### Styling
Tailwind configuration is in `tailwind.config.ts`. The primary color scheme uses purple gradients.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **For production deployment**
   ```bash
   vercel --prod
   ```

### Alternative: GitHub Actions + Vercel

The project includes a `.github/workflows` folder (to be added) for automated deployments on push to main.

### Environment Variables
No environment variables required for the MVP. Future integrations (auth, CMS) will need configuration.

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🔮 Roadmap

- [ ] Add authentication (Auth0/Supabase)
- [ ] Integrate real-time event RSVP system
- [ ] Connect to headless CMS for announcements
- [ ] Add search functionality across all services
- [ ] Implement dark mode toggle
- [ ] Add i18n (internationalization) support
- [ ] Create admin dashboard for content management
- [ ] Add analytics and tracking
- [ ] Mobile app (React Native/Flutter)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

- **Email:** support@upepo.org
- **Community:** [Upepo Network](https://upepo.network)
- **Issues:** [GitHub Issues](https://github.com/LizaImmax/Upepo-Hub/issues)

## 🙏 Acknowledgments

- Upepo community for feedback and support
- Next.js team for the amazing framework
- Vercel for hosting and deployment platform

---

**Built with ❤️ by the Upepo Team**

© 2025 Upepo Hub. All rights reserved.
