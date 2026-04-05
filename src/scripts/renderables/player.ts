import { Sprite } from "melonjs";

class PlayerEntity extends Sprite {

    /**
     * constructor
     */
    constructor(x: number, y: number, settings: { image: string; [key: string]: unknown }) {
        // call the parent constructor
        super(x, y, settings);
    }

    /**
     * update the entity
     */
    update(dt: number) {
        // change body force based on inputs
        // ...
        // call the parent method
        return super.update(dt);
    }

    /**
     * collision handler
     * (called when colliding with other objects)
     */
    onCollision() {
        // Make all other objects solid
        return true;
    }
}

export default PlayerEntity;
