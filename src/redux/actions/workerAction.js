import { collection, doc, getDocs, query, where } from "firebase/firestore"
import {database} from '../../firebase/firebaseConfig';
import { workerTypes } from "../types/workerTypes";

const collectionName = 'contratistas';

export const actionGetWorkerAsync = () => {
    return async (dispatch) => {
        const workerCollection = collection(database, collectionName);
        const querySnapshot = await getDocs(workerCollection);
        const worker = [];
        try {
            querySnapshot.forEach((doc) => {
                worker.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetWorkerSync(worker));
        }
    }
}

const actionGetWorkerSync = (worker) => {
    return {
        type: workerTypes.GET_WORKER,
        payload: {
            worker: worker
        }
    }
}