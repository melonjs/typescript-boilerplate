import { Entity } from "melonjs";

class PlayerEntity extends Entity {

    /**
     * constructor
     */
    constructor(x: number, y: number, settings: any) {
        // call the parent constructor
        super(x, y , settings);
    }

    /**
     * update the entity
     */
    update(dt: number) {
        // change body force based on inputs
        //....
        // call the parent method
        return super.update(dt);
    }

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision(response: any, other: any) {
        // Make all other objects solid
        return true;
    }
};

export default PlayerEntity;
