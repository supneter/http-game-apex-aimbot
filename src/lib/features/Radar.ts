import * as app from '.';

      const y = this.centerY + this.outerRadius * Math.sin(i * Math.PI * 0.25);
      this.context.beginPath();
      this.context.moveTo(this.centerX, this.centerY);
      this.context.lineTo(x, y);
      this.context.stroke();
    }
  }

  private renderRings() {
    this.context.strokeStyle = '#FFF';
    for (let i = 1; i <= this.numberOfRings; i++) {
      this.context.beginPath();
      this.context.arc(this.centerX, this.centerY, this.outerRadius * i / this.numberOfRings, 0, Math.PI * 2);
      this.context.stroke();
    }
  }

  private update() {
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.outerRadius = (this.canvas.width > this.canvas.height ? this.canvas.height : this.canvas.width) / 2;
  }
}
