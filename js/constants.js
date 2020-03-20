//figure color depends on it's type.
const colorsArr = ['I', 'O', 'T', 'L', 'L'];

const xInitial = 4, yInitial = 13;

//the figures are given by the tree arrays of coordinates(x, y) relative to the first coordinate (the lowest and the leftmost)
//with coordinate (0, 0).
let figures = [
    //I
    [ [0, 1], [0, 2], [0, 3] ],
    //O
    [ [1, 0], [0, 1], [1, 1] ],
    //T
    [ [1, 0], [2, 0], [1, 1] ], 
    //L
    [ [1, 0], [0, 1], [0, 2] ],
    //mirror L
    [ [1, 0], [1, 1], [1, 2] ]
]

// add this values to the current coordinates to rotate figure
let figuresRotation = [
    [ //I
        [[-1, 1], [0, 0], [1, -1], [2, -2]],   // 90 degrees rotation
        [[1, -1], [0, 0], [-1, 1], [-2, 2]],   // 180 degrees rotation
        [[-1, 1], [0, 0], [1, -1], [2, -2]],   // 270 degrees rotation
        [[1, -1], [0, 0], [-1, 1], [-2, 2]]    // 360 degrees rotation
    ],
    [ //O
        [[0, 0], [0, 0], [0, 0], [0, 0]],      // 90 degrees rotation
        [[0, 0], [0, 0], [0, 0], [0, 0]],      // 180 degrees rotation
        [[0, 0], [0, 0], [0, 0], [0, 0]],      // 270 degrees rotation
        [[0, 0], [0, 0], [0, 0], [0, 0]]       // 360 degrees rotation
    ],
    [ //T
        [[1, -1], [0, 0], [0, 0], [0, 0]],      // 90 degrees rotation
        [[0, 0], [-1, 0], [-1, 0], [1, -1]],    // 180 degrees rotation
        [[1, -1], [1, -1], [1, -1], [0, 0]],    // 270 degrees rotation
        [[-2, 0], [0, -1], [0, -1], [-1, -1]]   // 360 degrees rotation
    ],
    [ //L
        [[0, 0], [-1, 1], [1, 0], [2, -1]],     // 90 degrees rotation
        [[1, -1], [1, -1], [-1, 0], [-1, 0]],   // 180 degrees rotation
        [[-1, 0], [0, -1], [2, -2], [1, -1]],   // 270 degrees rotation
        [[0, -1], [0, -1], [-2, 0], [-2, 0]]    // 360 degrees rotation
    ],
    [ //mirror L
        [[0, 0], [0, 0], [1, -1], [-1, -1]],    // 90 degrees rotation
        [[0, -1], [-1, 0], [-2, 1], [1, 0]],    // 180 degrees rotation
        [[2, 0], [0, 0], [1, -1], [1, -1]],     // 270 degrees rotation
        [[-2, 0], [1, -1], [0, 0], [-1, 1]]     // 360 degrees rotation
    ]
]

// Event keys
const DOWN  = 40;
const LEFT  = 37;
const UP = 38;
const RIGHT = 39;
const PAUSE = 32;
