import { Platform, LongPlatform, Spring } from "../placeables.js";
import { Spike } from "../objects/spike.js";
import { Pillar } from "../objects/pillar.js";
import { Level } from "./level.js";
import { Flag } from "../flag.js";


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
            new Pillar (0, 400, 200, 300),
            new Pillar (800, 500, 200, 200),
        ],
        [
            new Platform(),
            new Platform(),
        ],
        {
            x: 50,
            y: 300
        }
    )
    
]