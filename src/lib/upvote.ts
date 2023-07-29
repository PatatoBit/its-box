import { doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

export const upVote = async (docId: string, userId: string) => {
	const docRef = doc(db, 'ideas', docId);

	console.log('Upvoted as', userId);

	const docSnap = (await getDoc(docRef)).data();

	if (docSnap && !docSnap.upvoters.includes(userId)) {
		await updateDoc(docRef, {
			upvote: increment(1),
			upvoters: [...docSnap.upvoters, userId]
		});
	} else if (docSnap) {
		await updateDoc(docRef, {
			upvote: increment(-1),
			upvoters: docSnap.upvoters.filter((upvoter: string) => upvoter !== userId)
		});
	}
};
