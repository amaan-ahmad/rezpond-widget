import {
    atom, RecoilState
} from 'recoil';
import { BackendService } from '../services';

export const backendService = atom({
    key: 'backendService',
    default: new BackendService('test')
});

