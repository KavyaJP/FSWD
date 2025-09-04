const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const paddleWidth = 12;
const paddleHeight = 90;
const ballRadius = 8;
const playerX = 10;
const aiX = canvas.width - paddleWidth - 10;

// Game state
let playerY = canvas.height / 2 - paddleHeight / 2;
let aiY = playerY;
let playerScore = 0;
let aiScore = 0;
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: 5 * (Math.random() > 0.5 ? 1 : -1),
    vy: 3 * (Math.random() > 0.5 ? 1 : -1),
    speed: 5
};

// Mouse movement for player paddle
canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    playerY = mouseY - paddleHeight / 2;
    playerY = Math.max(0, Math.min(canvas.height - paddleHeight, playerY));
});

// Draw paddles, ball, and scores
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player paddle
    ctx.fillStyle = '#4caf50';
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);

    // Draw AI paddle
    ctx.fillStyle = '#f44336';
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();

    // Draw scores
    ctx.fillStyle = '#fff';
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    
    // Player score (left side)
    ctx.fillText(playerScore, canvas.width / 4, 60);
    
    // AI score (right side)
    ctx.fillText(aiScore, (3 * canvas.width) / 4, 60);
    
    // Draw center line
    ctx.setLineDash([10, 15]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.setLineDash([]);
}

// Ball & Paddle collision detection
function collision(paddleX, paddleY) {
    return ball.x + ballRadius > paddleX &&
           ball.x - ballRadius < paddleX + paddleWidth &&
           ball.y + ballRadius > paddleY &&
           ball.y - ballRadius < paddleY + paddleHeight;
}

// AI paddle movement
function moveAI() {
    const centerAI = aiY + paddleHeight / 2;
    if (centerAI < ball.y - 15) {
        aiY += 5;
    } else if (centerAI > ball.y + 15) {
        aiY -= 5;
    }
    aiY = Math.max(0, Math.min(canvas.height - paddleHeight, aiY));
}

// Ball movement and wall collisions
function update() {
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Top and bottom wall collision
    if (ball.y - ballRadius < 0 || ball.y + ballRadius > canvas.height) {
        ball.vy = -ball.vy;
    }

    // Left paddle collision
    if (collision(playerX, playerY)) {
        ball.vx = Math.abs(ball.vx);
        // Add effect based on where the ball hits the paddle
        let collidePoint = (ball.y - (playerY + paddleHeight / 2)) / (paddleHeight / 2);
        ball.vy = ball.speed * collidePoint;
    }

    // Right paddle collision (AI)
    if (collision(aiX, aiY)) {
        ball.vx = -Math.abs(ball.vx);
        let collidePoint = (ball.y - (aiY + paddleHeight / 2)) / (paddleHeight / 2);
        ball.vy = ball.speed * collidePoint;
    }

    // Ball goes out (score logic, reset ball)
    if (ball.x - ballRadius < 0) {
        aiScore++;
        resetBall();
    } else if (ball.x + ballRadius > canvas.width) {
        playerScore++;
        resetBall();
    }
}

// Ball reset
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.vx = 5 * (Math.random() > 0.5 ? 1 : -1);
    ball.vy = 3 * (Math.random() > 0.5 ? 1 : -1);
}

// Main game loop
function gameLoop() {
    moveAI();
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();