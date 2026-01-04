---
id: "lasercat"
title: "LaserCat"
description: "Open-source desktop laser engraver/cutter project — PCB design, firmware and electronics for a compact laser platform."
technologies: ["kicad", "platformio", "arduino", "c++", "firmware"]
types: ["hardware", "firmware", "pcb"]
topics: ["laser-engraver", "embedded", "pcb", "firmware"]
imageUrl: "/projects/lasercat.jpg"
---

# LaserCat

LaserCat is a DIY, open-source robotic laser turret for cats.
It automates the timeless joy of chasing a red dot using a microcontroller, two servos, and a laser pointer, all wrapped in a 3D-printed body.

The goal is simple:
keep cats entertained, humans hands-free, and hackers smiling.

LaserCat plays nicely with smart homes, can be remotely controlled, and is fully hackable for those who like their pet toys programmable.

## How does it work

At its core, LaserCat is a tiny robot with a steady aim:

- An ESP8266 microcontroller acts as the brain.
- Two servos provide pan and tilt movement.
- A laser diode projects the irresistible red dot.
- A 3D-printed enclosure holds everything together.
- The firmware lets you control the laser in multiple ways:
-- MQTT for smart home systems like Home Assistant.
-- OSC for real-time control using sliders or joysticks.
-- Manual triggers for simple on/off play sessions.

You send commands.
The servos move.
The laser dances.
The cat loses its mind.

## Resources
🔧 Full build guide:
https://www.instructables.com/LaserCat/