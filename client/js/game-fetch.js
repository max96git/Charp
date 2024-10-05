import app from '../../database/config.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(app);

export const fetchGames = async () => {
  const gamesCollection = collection(db, 'games');
  const gameSnapshot = await getDocs(gamesCollection);
  const gameList = gameSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return gameList;
};
