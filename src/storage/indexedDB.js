import { openDB } from 'idb';

const nameDB = 'pokemonDB';
const versionDB = 1;

const dbPromise = openDB(nameDB, versionDB, (upgradeDB) => {
    const pokeObjectStore = upgradeDB.createObjectStore('Pokemons',{
        keyPath: 'myPokemonId'
    }); // create an object store
    pokeObjectStore.createIndex('myPokemonId', 'myPokemonId', {
        unique: false
    }); // indexes
  });

class indexedDB {
    catchPoke(pokemon) { // add pokemon put()
        dbPromise
            .then((db) => {
                const tx = db.transaction('Pokemons', 'readwrite');
                const store = tx.objectStore('Pokemons');
                console.log(pokemon);
                store.put(pokemon);
                return tx.done;
            })
            .then(() => {
                console.log('Pokemon catched!');
            });
    }

    getMyPokemons() { // get item from store get()
        return new Promise((resolve) => {
            dbPromise
              .then((db) => {
                const tx = db.transaction('Pokemons', 'readonly');
                const store = tx.objectStore('Pokemons');
                return store.getAll();
              })
              .then((pokemons) => {
                resolve(pokemons);
                console.log('Got your pokemons!')
              });
        });
    }
}

export const Storage = new indexedDB();