export class Sprite {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public image: HTMLImageElement;
    public draw: Function;

    public intersects(sprite: Sprite): boolean {
        let xl = Math.max(this.x, sprite.x);
        let xr = Math.min(this.x + this.width, sprite.x + sprite.width);
        let yt = Math.max(this.y, sprite.y);
        let yb = Math.min(this.y + this.height, sprite.y + sprite.height);

        return xl <= xr && yt <= yb;
    }
}