# ByteSpace

ByteSpace is a modern online learning platform and course directory. This project was built to practice creating responsive layouts, dynamic routing, and integrating authentication.

**Live Demo:** [https://byte-space-khaki.vercel.app/](https://byte-space-khaki.vercel.app/)

## Features
- **Responsive Landing Page:** Fully responsive design that adapts to mobile, tablet, and desktop screens.
- **Dynamic Course Portal:** Course detail pages, lesson lists, and creator profiles load dynamically based on the URL.
- **Search & Filtering:** Users can filter courses by category, level, and search terms.
- **Authentication:** Integrated Google Sign-in using Firebase Authentication.

## Tech Stack
- **Frontend:** React (with Vite)
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Backend/Auth:** Firebase

## Running Locally

If you want to clone this repository and run it on your own machine:

1. Clone the repo:
   ```bash
   git clone https://github.com/taharukaiya/ByteSpace.git
   cd ByteSpace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Copy the contents from `.env.example` into `.env`.
   - Add your own Firebase config keys.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser.
