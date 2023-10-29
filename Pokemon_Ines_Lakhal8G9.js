class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(target) {
        if (this.isLucky()) {
            const damage = this.attack - target.defense;
            if (damage > 0) {
                target.hp -= damage;
            }
            console.log(`${this.name} attaque ${target.name} et lui inflige ${damage > 0 ? damage : 0} points de dégâts.`);
            console.log(`${target.name} a maintenant ${target.hp > 0 ? target.hp : 0} points de vie.`);
        } else {
            console.log(`${this.name} rate son attaque contre ${target.name}.`);
        }
    }
}

const pokemon1 = new Pokemon('Pikachu', 30, 20, 100, 0.8);
const pokemon2 = new Pokemon('Bulbisar', 25, 22, 110, 0.7);

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    pokemon1.attackPokemon(pokemon2);
    if (pokemon2.hp <= 0) {
        console.log(`${pokemon2.name} est K.O. ${pokemon1.name} remporte le combat !`);
        break;
    }
    pokemon2.attackPokemon(pokemon1);
    if (pokemon1.hp <= 0) {
        console.log(`${pokemon1.name} est K.O. ${pokemon2.name} remporte le combat !`);
        break;
    }
}
//crée par Ines Lakhal
