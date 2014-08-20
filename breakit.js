var WALL_THICKNESS = 20;
var PADDLE_WIDTH = 100;
var PADDLE_SPEED = 16;
var PUCK_SPEED = 5;
var PADDLE_HITS_FOR_NEW_LEVEL = 5;
var SCORE_BOARD_HEIGHT = 50;
var ARROW_KEY_LEFT = 37;
var ARROW_KEY_RIGHT = 39;
var SPACE_KEY = 32;


var cnavas, stage, paddle, puck, board, scoreTxt, livesTxt, messageTxt, messageInterval;
var leftWall, rightWall, ceiling, floor;

var leftKeyDown = false;
var rightKeyDown = false;

var bricks = [];
var paddleHits = 0;
var combo = 0;
var lives = 5;
var score = 0;
var level = 0;

var gameRunning = true;
