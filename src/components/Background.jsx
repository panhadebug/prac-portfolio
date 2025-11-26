import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Stars
        const stars = Array.from({ length: 200 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1,
        }));

        // Meteors
        let meteors = [];
        const createMeteor = () => {
            const x = Math.random() * canvas.width;
            const y = -50;
            const length = Math.random() * 80 + 20;
            const speed = Math.random() * 10 + 5;
            const angle = Math.PI / 4; // 45 degrees
            meteors.push({ x, y, length, speed, angle });
        };

        setInterval(createMeteor, 2000); // Create a meteor every 2 seconds

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            ctx.fillStyle = 'white';
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                star.y += star.speed;
                if (star.y > canvas.height) star.y = 0;
            });

            // Draw Meteors
            meteors.forEach((meteor, index) => {
                ctx.beginPath();
                const tailX = meteor.x - meteor.length * Math.cos(meteor.angle);
                const tailY = meteor.y - meteor.length * Math.sin(meteor.angle);

                const gradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.moveTo(meteor.x, meteor.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();

                meteor.x += meteor.speed * Math.cos(meteor.angle);
                meteor.y += meteor.speed * Math.sin(meteor.angle);

                if (meteor.y > canvas.height || meteor.x > canvas.width) {
                    meteors.splice(index, 1);
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Starfield & Meteors Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 dark:opacity-100" />

            {/* Earth Visual */}
            <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full bg-blue-500/10 blur-[100px] z-0"></div>
            <div className="earth-container absolute -bottom-[40%] left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] rounded-full overflow-hidden z-0">
                <div className="earth w-full h-full rounded-full relative">
                    {/* Atmosphere Glow (Sunrise Effect) */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.8),inset_10px_10px_100px_rgba(59,130,246,0.6)]"></div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-20 bg-blue-400/50 blur-[60px] rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Background;
