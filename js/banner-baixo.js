const slider = document.querySelector(".items");
		const slidesB = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button-b");

		let current = 0;
		let prev = 2;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
      mudarPosition()
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slidesB.length - 1);

		const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slidesB.length; i++) {
				slidesB[i].classList.remove("active");
				slidesB[i].classList.remove("prev");
				slidesB[i].classList.remove("next");
			}

			if (next == 3) {
				next = 0;
			}

			if (prev == -1) {
				prev = 2;
			}

			slidesB[current].classList.add("active");
			slidesB[prev].classList.add("prev");
			slidesB[next].classList.add("next");
      
      mudarPosition();
		}

        function mudarPosition() {
            const Prev = document.querySelector(".prev");  
            const Next = document.querySelector(".next");
            const Active = document.querySelector(".active")

            if (Prev.dataset.number == 1) {
              Prev.style.transform = "scale(0.9) translateX(35%)"
              Prev.style.backgroundImage = `url("img/fernanda/caça.jpg")`;
              Prev.style.backgroundPositionY = "-60px";
              Prev.style.backgroundSize = "510px"

            } else if (Prev.dataset.number == 2) {
              Prev.style.transform = "scale(0.9) translateX(-75%)"
              Prev.style.backgroundImage = `url('img/fernanda/geleira.webp')`

            } else if (Prev.dataset.number == 3) {
              Prev.style.transform = "scale(0.9) translateX(-185%)"
              Prev.style.backgroundImage = `url('img/fernanda/lixo1.jpg')`

            }
            
            if (Active.dataset.number == 1) {
              Active.style.transform = "scale(1.1) translateX(91%)"
              Active.style.backgroundImage = `url("img/fernanda/caça.jpg")`;
              Active.style.backgroundPositionY = "-60px";
              Active.style.backgroundSize = "510px"

            } else if (Active.dataset.number == 2) {
              Active.style.transform = "scale(1.1) translateX(0%)"
              Active.style.backgroundImage = `url('img/fernanda/geleira.webp')`


            } else if (Active.dataset.number == 3) {
              Active.style.transform = "scale(1.1) translateX(-91%)"
              Active.style.backgroundImage = `url('img/fernanda/lixo1.jpg')`

            }
            
            if (Next.dataset.number == 1) {
              Next.style.transform = "scale(0.9) translateX(186%)"
              Next.style.backgroundImage = `url("img/fernanda/caça.jpg")`;
              Next.style.backgroundPositionY = "-60px";
              Next.style.backgroundSize = "510px"

            } else if (Next.dataset.number == 2) {
              Next.style.transform = "scale(0.9) translateX(75%)"
              Next.style.backgroundImage = `url('img/fernanda/geleira.webp')`


            } else if (Next.dataset.number == 3) {
              Next.style.transform = "scale(0.9) translateX(-36%)"
              Next.style.backgroundImage = `url('img/fernanda/lixo1.jpg')`

            }
          }
          
mudarPosition();