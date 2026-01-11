import { Platform, LongPlatform, Spring } from "../objects/placeables.js";
import { Spike } from "../objects/spike.js";
import { Pillar } from "../objects/pillar.js";
import { Level } from "./level.js";
import { Flag } from "../objects/flag.js";

export const LevelList = [
    new Level(
        [
            new Pillar (0, 400, 200, 300),
            new Pillar (800, 500, 200, 200),
            new Spike (0,550,20),
            new Flag (900,400)
        ],
        [
            new Platform(),
            new Platform(),
        ],
        {
            x: 50,
            y: 300
        }
    ),
    new Level(
        [
            new Pillar (0, 300, 250, 300),
            new Pillar (400, 0, 100, 300),
            new Pillar (800, 300, 200, 400),
            new Spike (0,550,20),
            new Flag(900,200)
        ],
        [
            new Platform(),
            new LongPlatform(),
        ],
        {
            x: 50,
            y: 200
        }
    ),
    new Level(
        [
            new Pillar (250, 200, 350, 100),
            new Pillar (350, 0, 50, 300),
            new Pillar (800, 0, 200, 800),
            new Pillar (0, 400, 150, 400),
            new Spike (0,550,20),
            new Flag (300,100)
        ],
        [
            new Platform(),
            new Platform(),
            new LongPlatform()
        ],
        {
            x: 450,
            y: 100
        }
    ),
    new Level(
        [
            new Pillar (0, 200, 200, 100),
            new Pillar (800, 200, 200, 400),
            new Pillar (250, 0, 300, 200),
            new Pillar (250, 200, 50, 200),
            new Pillar (400, 450, 50, 150),
            new Pillar (500, 200, 50, 250),
            new Spike (0,550,20),
            new Spike (400,400,1),
            new Flag (900,100)
        ],
        [
            new LongPlatform(),
            new LongPlatform(),
            new Spring(),
        ],
        {
            x: 50,
            y: 100
        }
    ),
     new Level(
        [
            new Pillar (300, 500, 200, 200),
            new Pillar (300, 150, 50, 350),
            new Pillar (350, 150, 350, 100),
            new Pillar (550, 500, 50, 100),
            new Pillar (0, 300, 200, 300),
            new Pillar (0, 0, 250, 100),
            new Pillar (200, 0, 50, 200),
            new Spike (0,550,20),
            new Spike (550,450,1),
            new Spike (500,100,1),
            new Flag (100,200)
        ],
        [
            new Platform(),
            new Spring(),
            new Spring(),
        ],
        {
            x: 400,
            y: 400
        }
    ),
]