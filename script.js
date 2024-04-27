const result = document.querySelector('.result');

        const uninum = [48, 57];
        const uniupper = [65, 90];
        const unilower = [97, 122];
        const unisym = [33, 47];

        document.querySelector('.buttons').addEventListener('click', () => {
            const length = document.querySelector('#length').value;
            const uppercase = document.querySelector('#uppercase').checked;
            const lowercase = document.querySelector('#lowercase').checked;
            const symbols = document.querySelector('#symbols').checked;
            const number = document.querySelector('#number').checked;

            const randselector = [];
            const password = [];
            if (uppercase === true) {
                for (let i = uniupper[0]; i <= uniupper[1]; i++) {
                    randselector.push(i);
                }
            }
            if (lowercase === true) {
                for (let i = unilower[0]; i <= unilower[1]; i++) {
                    randselector.push(i);
                }
            }
            if (number === true) {
                for (let i = uninum[0]; i <= uninum[1]; i++) {
                    randselector.push(i);
                }
            }
            if (symbols === true) {
                for (let i = unisym[0]; i <= unisym[1]; i++) {
                    randselector.push(i);
                }
            }
            for (let i = 0; i < length; i++) {
                password.push(String.fromCharCode(randselector[Math.floor(Math.random() * randselector.length)]))
            }
            result.value = password.join('');

        })



        function myFunction() {
            var copyText = document.getElementById("myInput");
            copyText.select();
            copyText.setSelectionRange(0, 20);
            navigator.clipboard.writeText(copyText.value);
        }