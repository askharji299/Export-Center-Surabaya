import React, { useEffect, useRef } from 'react';

export default function InteractiveLine() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        const numPoints = 25; // Vertical resolution of the string
        let points = [];
        let mouse = { x: -1000, y: -1000, active: false };

        const updateDimensions = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            // Target position: right 14rem (14 * 16px = 224px from right)
            const lineX = rect.width - 224;

            points = [];
            for (let i = 0; i < numPoints; i++) {
                const y = (i / (numPoints - 1)) * (rect.height * 0.9) + rect.height * 0.05;
                points.push({
                    x: lineX,
                    originX: lineX,
                    y: y,
                    vx: 0,
                    pinned: i === 0 || i === numPoints - 1 // Pin top and bottom ends
                });
            }
        };

        updateDimensions();

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        const parent = canvas.parentElement;
        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', updateDimensions);

        // Animation & Physics Loop
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const stiffness = 0.12;
            const damping = 0.80;
            const radius = 90;

            // Physics update
            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                if (p.pinned) continue;

                // Repel from mouse cursor
                if (mouse.active) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < radius) {
                        const force = (1 - dist / radius) * 3.5;
                        // Repel away from mouse X direction
                        const repelDir = dx > 0 ? -1 : 1;
                        p.vx += repelDir * force;
                    }
                }

                // Neighbor spring forces for realistic string elasticity
                if (i > 0) {
                    const prev = points[i - 1];
                    p.vx += (prev.x - p.x) * 0.05;
                }
                if (i < points.length - 1) {
                    const next = points[i + 1];
                    p.vx += (next.x - p.x) * 0.05;
                }

                // Restoring force to originX
                const targetForce = (p.originX - p.x) * stiffness;
                p.vx += targetForce;

                // Apply damping & velocity
                p.vx *= damping;
                p.x += p.vx;
            }

            // Draw line as smooth spline curve
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
            ctx.lineWidth = 2;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
            ctx.shadowBlur = 3;

            ctx.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length - 1; i++) {
                const xc = (points[i].x + points[i + 1].x) / 2;
                const yc = (points[i].y + points[i + 1].y) / 2;
                ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
            }

            ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
            ctx.stroke();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            parent.removeEventListener('mousemove', handleMouseMove);
            parent.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 3
            }}
        />
    );
}
