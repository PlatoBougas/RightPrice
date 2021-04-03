const colors = ["#FF4143", "#50C5DC", "#F7B42E"];

function createElements(root, elementCount) {
  return Array.from({ length: elementCount }).map((_, index) => {
    const element = document.createElement("div");
    element.classList = ["fetti"];
    const color = colors[index % colors.length];
    element.style["background-color"] = color; // eslint-disable-line space-infix-ops
    element.style.width = "10px";
    element.style.height = "10px";
    element.style.borderTopLeftRadius = "10px";
    element.style.borderTopRightRadius = "8px";
    element.style.borderBottomLeftRadius = "6px";
    element.style.borderBottomRightRadius = "12px";
    element.style.position = "absolute";
    element.style.opacity = 1;
    root.appendChild(element);
    return element;
  });
}

function randomPhysics(angle, spread, startVelocity) {
  const radAngle = angle * (Math.PI / 180);
  const radSpread = spread * (Math.PI / 180);
  return {
    x: 0,
    y: 0,
    wobble: Math.random() * 10,
    velocity:
      startVelocity * 0.65 + Math.max(Math.random(), 0.35) * startVelocity,
    angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
    angle3D: -(Math.PI / 4) + Math.random() * (Math.PI / 2),
    // angle3D: 0,
    tiltAngle: Math.random() * Math.PI,
  };
}

function updateFetti(fetti, progress, decay) {
  /* eslint-disable no-param-reassign */
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
  fetti.physics.wobble += 0.05;
  fetti.physics.velocity *= decay;
  fetti.physics.y += 3;
  fetti.physics.tiltAngle += 30.1;

  const { x, y, tiltAngle, wobble } = fetti.physics;
  const wobbleX = x + 10 * Math.cos(wobble);
  const wobbleY = y + 10 * Math.sin(wobble);
  const transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotateZ(${tiltAngle}deg)`;

  fetti.element.style.transform = transform;
  fetti.element.style.opacity = Math.min(1 - progress * 4.2, 100 - y);

  /* eslint-enable */
}

function animate(root, fettis, decay) {
  const totalTicks = 200;
  let tick = 0;

  function update() {
    fettis.forEach((fetti) => updateFetti(fetti, tick / totalTicks, decay));

    tick += 1;
    if (tick < totalTicks) {
      requestAnimationFrame(update);
    } else {
      fettis.forEach((fetti) => root.removeChild(fetti.element));
    }
  }

  requestAnimationFrame(update);
}

function confetti(
  root,
  {
    angle = 90,
    decay = 0.88,
    spread = 120,
    startVelocity = 21,
    elementCount = 15,
  } = {}
) {
  const elements = createElements(root, elementCount);
  const fettis = elements.map((element) => ({
    element,
    physics: randomPhysics(angle, spread, startVelocity),
  }));
  animate(root, fettis, decay);
}




const colors = [
  '#FF4143',
  '#50C5DC',
  '#F7B42E',
];

function createElements(root, elementCount) {
  return Array
    .from({ length: elementCount })
    .map((_, index) => {
      const element = document.createElement('div');
      element.classList = ['fetti'];
      const color = colors[index % colors.length];
      element.style['background-color']= color; // eslint-disable-line space-infix-ops
      element.style.width = '10px';
      element.style.height = '10px';
      element.style.borderTopLeftRadius = '10px';
      element.style.borderTopRightRadius = '8px';
      element.style.borderBottomLeftRadius = '6px';
      element.style.borderBottomRightRadius = '12px';
      element.style.position = 'absolute';
      element.style.opacity = 1;
      root.appendChild(element);
      return element;
    });
}

function randomPhysics(angle, spread, startVelocity) {
  const radAngle = angle * (Math.PI / 180);
  const radSpread = spread * (Math.PI / 180);
  return {
    x: 0,
    y: 0,
    wobble: Math.random() * 10,
    velocity: (startVelocity * 0.65) + Math.max(Math.random(), .35) * startVelocity,
    angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
    angle3D: -(Math.PI / 4) + (Math.random() * (Math.PI / 2)),
    // angle3D: 0,
    tiltAngle: Math.random() * Math.PI
  };
}

function updateFetti(fetti, progress, decay) {
  /* eslint-disable no-param-reassign */
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
  fetti.physics.wobble += 0.05;
  fetti.physics.velocity *= decay;
  fetti.physics.y += 3;
  fetti.physics.tiltAngle += 30.1;

  const { x, y, tiltAngle, wobble } = fetti.physics;
  const wobbleX = x + (10 * Math.cos(wobble));
  const wobbleY = y + (10 * Math.sin(wobble));
  const transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotateZ(${tiltAngle}deg)`;

  fetti.element.style.transform = transform;
  fetti.element.style.opacity = Math.min(1 - (progress * 4.2), 100 - y);

  /* eslint-enable */
}

function animate(root, fettis, decay) {
  const totalTicks = 200;
  let tick = 0;

  function update() {
    fettis.forEach((fetti) => updateFetti(fetti, tick / totalTicks, decay));

    tick += 1;
    if (tick < totalTicks) {
      requestAnimationFrame(update);
    } else {
      fettis.forEach((fetti) => root.removeChild(fetti.element));
    }
  }

  requestAnimationFrame(update);
}

function confetti(root, {
    angle = 90,
    decay = 0.88,
    spread = 120,
    startVelocity = 21,
    elementCount = 15
  } = {}) {
  const elements = createElements(root, elementCount);
  const fettis = elements.map((element) => ({
    element,
    physics: randomPhysics(angle, spread, startVelocity)
  }));
  animate(root, fettis, decay);
}


$(function() {
  $("#main").mousedown(function() {
    confetti($("#main")[0]);
  });
});
