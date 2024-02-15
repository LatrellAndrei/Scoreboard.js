export default class ScoreboardView {
  constructor(root, playerOneName, playerTwoName, onControlButtonClick) {
    this.root = root;
    this.root.innerHTML = `
    <div class="scoreboard">
        <div class="scoreboard_name scoreboard_name-one">${playerOneName}</div>
        <div class="scoreboard_name scoreboard_name-two">${playerTwoName}</div>
        <div class="scoreboard_score" data-for-player="one">0</div>
        <div class="scoreboard_score" data-for-player="two">0</div>

        <div class="scoreboard_controls" data-for-player="one">
          <button class="scoreboard-control-button">-</button>
          <button class="scoreboard-control-button">+</button>
        </div>

        <div class="scoreboard_controls" data-for-player="two">
          <button class="scoreboard-control-button">-</button>
          <button class="scoreboard-control-button">+</button>
        </div>

      </div>
    `;

    this.root
      .querySelectorAll(".scoreboard-control-button")
      .forEach((controlButton) => {
        controlButton.addEventListener("click", () => {
          const direction =
            controlButton.textContent === "-" ? "minus" : "plus";
          const player = controlButton.closest(".scoreboard_controls").dataset
            .forPlayer;

          onControlButtonClick(player, direction);
        });
      });
  }
  update(playerOneScore, playerTwoScore) {
    this.root.querySelector(
      ".scoreboard_score[data-for-player='one']"
    ).textContent = playerOneScore;
    this.root.querySelector(
      ".scoreboard_score[data-for-player='two']"
    ).textContent = playerTwoScore;
  }
}
