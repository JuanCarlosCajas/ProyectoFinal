
export function useSwitch($element){
    if ($element.classList.contains('active')) 
    {
        $element.classList.replace('active', 'desactive')
    }
    else{
        $element.classList.replace('desactive', 'active')
    }
}