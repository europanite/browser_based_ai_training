# [Client Side AI Training](https://github.com/europanite/client_side_ai_training "Client Side AI Training")

[![CI](https://github.com/europanite/client_side_ai_training/actions/workflows/ci.yml/badge.svg)](https://github.com/europanite/client_side_ai_training/actions/workflows/ci.yml)
[![GitHub Pages](https://github.com/europanite/client_side_ai_training/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/europanite/client_side_ai_training/actions/workflows/deploy-pages.yml)

A Client Side Browser-Based AI Training Playground. 

!["web_ui"](./assets/images/web_ui.png)

##  Demo
 [Client Side AI Training](https://europanite.github.io/client_side_ai_training/)

## Data Structure

ROOT_DIRECTORY
├── CLASS_NAME_1
│   ├── image_01.png
│   ├── image_02.png
│   ├── image_03.png
│   ├── ...
├── CLASS_NAME_2
│   ├── image_01.png
│   ├── image_02.png
│   ├── image_03.png
│   ├── ...
├── CLASS_NAME_3
│   ├── image_01.png
│   ├── image_02.png
│   ├── image_03.png
│   ├── ...

---

## 🚀 Getting Started

### 1. Prerequisites
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

### 2. Build and start all services:

```bash
# set environment variables:
export REACT_NATIVE_PACKAGER_HOSTNAME=${YOUR_HOST}

# Build the image
docker compose build

# Run the container
docker compose up
```
---

# License
- Apache License 2.0