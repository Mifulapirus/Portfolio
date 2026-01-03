export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    types: string[];
    topics: string[];
    imageUrl: string;
}

// Fallback projects for those without markdown files
export const fallbackProjects: Project[] = [
    {
        id: "csa",
        name: "",
        description: "",
        technologies: [],
        types: [],
        topics: [],
        imageUrl: ""
    },

    {
        id: "activity-dice",
        name: "",
        description: "",
        technologies: [],
        types: [],
        topics: [],
        imageUrl: ""
    },
    {
        id: "notter",
        name: "",
        description: "",
        technologies: [],
        types: [],
        topics: [],
        imageUrl: "/projects/notter.jpg"
    },
    {
        id: "pawtracker",
        name: "",
        description: "",
        technologies: [],
        types: [],
        topics: [],
        imageUrl: ""
    },
    {
        id: "think-and-drink",
        name: "",
        description: "",
        technologies: [],
        types: [],
        topics: [],
        imageUrl: ""
    },
    {
        id: "date-abase",
        name: "Date-abase",
        description: "Python Flask application for tracking friends' dates with JSON storage and scoring system.",
        technologies: ["python", "flask", "web"],
        types: ["software", "web"],
        topics: ["tracking", "social"],
        imageUrl: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Date-abase"
    },
    {
        id: "democratic-robot",
        name: "Democratic-Robot",
        description: "ESP32-C3 based robot with web control interface and servo motor control.",
        technologies: ["esp32", "cpp", "platformio"],
        types: ["hardware", "robotics"],
        topics: ["robotics", "web-control", "servo"],
        imageUrl: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Democratic+Robot"
    },
    {
        id: "home-assistant-deck",
        name: "Home Assistant Deck",
        description: "Custom PCB design for smart home control interface using D1 Mini (ESP8266).",
        technologies: ["esp32", "kicad", "pcb"],
        types: ["hardware", "iot"],
        topics: ["smart-home", "pcb-design"],
        imageUrl: "https://via.placeholder.com/400x300/14b8a6/ffffff?text=HA+Deck"
    },
    {
        id: "invoice-reader",
        name: "Invoice Reader",
        description: "Python scripts to process invoice PDFs and extract tracking IDs using PyMuPDF and regex.",
        technologies: ["python", "pdf"],
        types: ["software"],
        topics: ["automation", "pdf-processing"],
        imageUrl: "https://via.placeholder.com/400x300/f97316/ffffff?text=Invoice+Reader"
    },
    {
        id: "meeting-notes",
        name: "Meeting Notes - Whisper Diarization",
        description: "Speaker diarization system using OpenAI Whisper and NeMo with TitaNet embeddings.",
        technologies: ["python", "ai", "whisper", "nemo"],
        types: ["software", "ai"],
        topics: ["transcription", "diarization", "ml"],
        imageUrl: "https://via.placeholder.com/400x300/a855f7/ffffff?text=Meeting+Notes"
    },
    {
        id: "billikenbot",
        name: "BillikenBot",
        description: "Aerial imaging or robotics project using Skypic integration for drone or camera system control.",
        technologies: ["skypic", "drone"],
        types: ["hardware", "robotics"],
        topics: ["aerial", "imaging"],
        imageUrl: "https://via.placeholder.com/400x300/ec4899/ffffff?text=BillikenBot"
    },
    {
        id: "squirrel-deterrent",
        name: "Squirrel Deterrent",
        description: "Embedded firmware project with custom hardware for automated squirrel detection and deterrence.",
        technologies: ["arduino", "embedded"],
        types: ["hardware", "iot"],
        topics: ["automation", "sensors"],
        imageUrl: "https://via.placeholder.com/400x300/84cc16/ffffff?text=Squirrel+Deterrent"
    },
    {
        id: "lazy-eye",
        name: "Lazy Eye",
        description: "Unity-based game or application project focused on visual training or gaming mechanics.",
        technologies: ["unity", "csharp"],
        types: ["software"],
        topics: ["game-development", "unity"],
        imageUrl: "https://via.placeholder.com/400x300/6366f1/ffffff?text=Lazy+Eye"
    },
    {
        id: "drunkala",
        name: "Drunkala",
        description: "Unity game project featuring custom gameplay mechanics.",
        technologies: ["unity", "csharp"],
        types: ["software"],
        topics: ["game-development"],
        imageUrl: "https://via.placeholder.com/400x300/f43f5e/ffffff?text=Drunkala"
    },
    {
        id: "esp-basic-core",
        name: "ESP Basic Core",
        description: "PlatformIO-based core library providing foundational code and utilities for ESP32 development.",
        technologies: ["esp32", "cpp", "platformio"],
        types: ["hardware"],
        topics: ["library", "esp32", "iot"],
        imageUrl: "https://via.placeholder.com/400x300/0ea5e9/ffffff?text=ESP+Core"
    },
    {
        id: "usb-battery-tester",
        name: "USB Battery Tester",
        description: "Hardware project for testing USB battery performance with custom electronics.",
        technologies: ["arduino", "embedded"],
        types: ["hardware"],
        topics: ["testing", "electronics"],
        imageUrl: "https://via.placeholder.com/400x300/eab308/ffffff?text=Battery+Tester"
    },
    {
        id: "arduino-logger",
        name: "Arduino Logger",
        description: "PlatformIO library providing structured logging capabilities for Arduino embedded systems.",
        technologies: ["arduino", "cpp"],
        types: ["hardware"],
        topics: ["library", "logging"],
        imageUrl: "https://via.placeholder.com/400x300/22c55e/ffffff?text=Arduino+Logger"
    }
];
