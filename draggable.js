class Draggable {
  constructor(x, y, w, points, image) {
      this.dragging = false;
      this.rollover = false;
      this.x = x;
      this.y = y;
      this.w = w;
      this.points = points;
      this.offsetX = 0;
      this.offsetY = 0;
      this.image = image;
      // Calculate height based on aspect ratio
      this.aspectRatio = this.image.height / this.image.width;
      this.h = this.w * this.aspectRatio;
      this.insideCollision = false;
  }

  over() {
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
          this.rollover = true;
      } else {
          this.rollover = false;
      }
  }

  update() {
      if (this.dragging) {
          this.x = mouseX + this.offsetX;
          this.y = mouseY + this.offsetY;
      }
  }

  show() {
      if (this.dragging) {
          fill(50);
      } else if (this.insideCollision) {
          fill(255, 0, 0);
      } else {
          fill(175, 200);
      }

      image(this.image, int(this.x), int(this.y), int(this.w), int(this.h));
  }

  collision() {
      let ellipseBoundingBox = {
          x: width / 2 - widthEllipse / 2,
          y: height / 2 - widthEllipse / 2,
          w: widthEllipse,
          h: widthEllipse
      };

      if (this.x + this.w > ellipseBoundingBox.x &&
          this.x < ellipseBoundingBox.x + ellipseBoundingBox.w &&
          this.y + this.h > ellipseBoundingBox.y &&
          this.y < ellipseBoundingBox.y + ellipseBoundingBox.h) {
          if (!this.insideCollision) {
              totalScore += this.points;
          }
          this.insideCollision = true;
          return true;
      } else {
          if (this.insideCollision) {
              totalScore -= this.points;
          }
          this.insideCollision = false;
          return false;
      }
  }

  pressed() {
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
          this.dragging = true;
          this.offsetX = this.x - mouseX;
          this.offsetY = this.y - mouseY;
      }
  }

  released() {
      this.dragging = false;
  }
}
