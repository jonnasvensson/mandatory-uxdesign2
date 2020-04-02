import { BehaviorSubject } from "rxjs";

export const result$ = new BehaviorSubject(
    JSON.parse(localStorage.getItem("result"))
);   

export function updateResultsFromLocalStorage(updatedResult) {
    if(updatedResult) {
        localStorage.setItem("result", JSON.stringify(updatedResult))        
    } else {
        localStorage.removeItem('result');
    }
    result$.next(updatedResult);
}