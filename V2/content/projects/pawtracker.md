---
id: "pawtracker"
title: "PawTracker"
description: "GPS tracker for dogs using LoRa technology with real-time web map interface and remote controls."
technologies: ["esp32", "lora", "gps", "nodejs"]
types: ["hardware", "iot", "web"]
topics: ["gps-tracking", "lora", "real-time"]
imageUrl: "/projects/pawtracker.jpg"
---

# PawTracker

Keep your furry friends safe with long-range GPS tracking.

## Overview

PawTracker is a GPS tracking collar for dogs that uses LoRa (Long Range) technology to provide tracking over distances up to 10km in open areas. The system includes a collar-mounted tracker and a web-based interface for real-time location monitoring.

## System Components

### Hardware Tracker
- ESP32 microcontroller
- LoRa radio module (915MHz)
- GPS module with external antenna
- Rechargeable LiPo battery
- LED indicator and buzzer
- Waterproof enclosure

### Base Station
- ESP32 with LoRa module
- WiFi connectivity for internet access
- Acts as gateway between tracker and cloud

### Web Interface
- Real-time map display using Leaflet.js
- Location history and tracking
- Remote LED/buzzer activation
- Battery status monitoring

## Technical Features

- **Long Range**: LoRa provides connectivity where cellular fails
- **Low Power**: Optimized sleep modes for extended battery life
- **Real-time Updates**: Location updates every 30 seconds when moving
- **Geofencing**: Alerts when pet leaves designated area
- **Find Mode**: Activate buzzer and LED remotely

## Challenges Overcome

Balancing power consumption with update frequency was key. Implemented smart tracking that increases update rate when the pet is moving and reduces it when stationary.

## Future Development

- Solar charging capability
- Multiple pet support
- Activity and health monitoring
- Mobile app for iOS and Android
