const input = document.querySelectorAll(".controls input");

console.log(input);

function handleUpdate(e) {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value)
    const change =document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    console.log(change);
    console.log(suffix);
    console.log(this.value);
    console.log(this.name);
}
input.forEach(input => input.addEventListener('change',handleUpdate));
input.forEach(input => input.addEventListener('mousemove',handleUpdate));
