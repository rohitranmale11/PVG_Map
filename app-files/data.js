var APP_DATA = {
  "scenes": [
    {
      "id": "0-telescopes",
      "name": "Telescopes",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8670364880226344,
        "pitch": 0.22621421771629713,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.11159713117083392,
          "pitch": -0.0795023707394833,
          "rotation": 12.566370614359176,
          "target": "1-observatry"
        },
        {
          "yaw": -1.159994704146932,
          "pitch": 0.29363954881646315,
          "rotation": 0,
          "target": "2-new-home"
        },
        {
          "yaw": -1.8262168269956973,
          "pitch": 0.3436502575753675,
          "rotation": 0,
          "target": "3-dom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-observatry",
      "name": "Observatry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-new-home",
      "name": "new home",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-dom",
      "name": "dom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "3D Observatory",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
