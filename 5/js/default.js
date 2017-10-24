function Default() {
    var protected = Zombie.call(this);
    this.$.addClass("default");
    this.speed = 2;
    this.health = 70;
    protected.currentHealth = this.health;
}