# VyaparKhata

<p align="center">
  <img src="assets/logo.png" alt="VyaparKhata Logo" width="120" />
</p>

<p align="center">
  <b>व्यापार खाता - सजिलै व्यापार व्यवस्थापन गर्नुहोस्</b>
</p>

VyaparKhata is a mobile application designed to help Nepali micro-businesses automatically track payment transactions through SMS notifications. The app captures payment notifications from services like Khalti, eSewa, and FonePay, parsing the SMS content to create transaction records without manual entry.

## 📱 Features

- **Automatic SMS Tracking**: Capture payment notifications from digital payment services
- **Transaction Dashboard**: View all your transactions in one place
- **Reports & Analysis**: Understand your business performance
- **Offline Support**: Works in areas with poor connectivity
- **Multiple Payment Providers**: Support for Khalti, eSewa, FonePay, and more
- **Nepali Language**: Full Nepali language support
- **Low Resource Usage**: Optimized for lower-end devices

## 🛠️ Technology Stack

- **Framework**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: React Navigation
- **State Management**: Redux Toolkit
- **UI Components**: React Native Paper
- **Storage**: AsyncStorage/SQLite

## 📋 Prerequisites

- Node.js (>= 14.0.0)
- npm or yarn
- Expo CLI
- Android Studio / Xcode (for development)

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/rudalkunwar/vyaparkhata.git
cd vyaparkhata

# Install dependencies
npm install
# or
yarn install

# Start the development server
expo start
```

### Running on Device

- Install Expo Go on your physical device
- Scan the QR code from the Expo CLI
- Or run on emulator: `expo start --android` or `expo start --ios`

## 📁 Project Structure

```
vyaparkhata/
├── assets/            # Static assets like images, fonts
├── src/
│   ├── components/    # Reusable UI components
│   ├── screens/       # Application screens
│   ├── navigation/    # Navigation configuration
│   ├── services/      # API services and business logic
│   ├── store/         # Redux store, actions, reducers
│   ├── theme/         # Theme configuration
│   ├── utils/         # Utility functions
│   └── hooks/         # Custom React hooks
├── App.tsx            # Main application component
└── app.json           # Expo configuration
```

## 📱 SMS Permissions

VyaparKhata requires SMS reading permissions to automatically track payment notifications. The app only reads messages from supported payment providers and does not send SMS or share your data with third parties.

## 🔒 Privacy & Security

- All data is stored locally on your device
- No personal information is transmitted to servers
- Transaction data is not shared with third parties

## 👥 Target Audience

- Small vendors and micro-businesses in Nepal
- Merchants using digital payment methods
- Business owners in areas with poor connectivity

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or feedback, please reach out at:

- Email: support@vyaparkhata.com
- Website: [vyaparkhata.com](https://vyaparkhata.com)

---

<p align="center">
  Developed with ❤️ for Nepali businesses
</p>
