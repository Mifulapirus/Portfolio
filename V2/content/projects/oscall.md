---
id: "oscall"
title: "OSCall"
description: "Collection of OSC-enabled device projects with captive-portal first-run setup and Open Stage Control integration."
technologies: ["osc", "wifi", "embedded", "open-stage-control"]
types: ["hardware", "software", "embedded"]
topics: ["networking", "osc", "iot"]
imageUrl: "/projects/oscall.jpg"
---

# OSCall

A collection of OSC-capable device projects that provide easy first-run setup via Access Point (captive portal) and integrate with Open Stage Control for interactive control and visualization.

## Overview

Each device in the `OSCall` collection boots as a Wi‑Fi Access Point on first start (or when reset) and exposes a captive portal (usually at `http://10.0.1.1`) where Wi-Fi and server settings can be configured. Devices send and receive OSC messages for control and telemetry.
