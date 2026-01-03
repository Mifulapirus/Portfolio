---
id: "activity-dice"
title: "Activity-Dice"
description: "Physical IoT dice for tracking time spent on different activities by turning the device."
technologies: ["arduino", "embedded", "iot"]
types: ["hardware", "iot"]
topics: ["tracking", "embedded-systems"]
imageUrl: "/projects/activity-dice.jpg"
---

# Activity-Dice

A physical IoT device that makes time tracking tactile and effortless.

## Concept

The Activity-Dice is a six-sided device where each face represents a different activity. Simply place the dice with your desired activity facing up, and it automatically tracks time spent on that activity.

## Hardware Design

- Custom PCB with ESP32 microcontroller
- 6-axis accelerometer for orientation detection
- Battery-powered with USB charging
- LED indicators for status feedback
- Compact, desk-friendly form factor

## Features

- **Automatic Detection**: Knows which activity is active based on orientation
- **Local Storage**: Saves tracking data even when offline
- **Web Dashboard**: View detailed analytics and visualizations
- **Customizable Labels**: Configure activities to match your workflow
- **Low Power Mode**: Optimized for extended battery life

## Technical Implementation

The device uses an MPU6050 accelerometer to detect orientation and determine which face is up. Data is stored locally on SPIFFS and synced to a cloud database when WiFi is available.

## Use Cases

- Time tracking for freelancers
- Study session monitoring
- Task switching awareness
- Personal productivity insights
