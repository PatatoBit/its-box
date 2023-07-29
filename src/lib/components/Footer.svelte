<footer class="footer">
	<div class="wrapper">
		<div class="wrapper">
			<div>
				<h4>The Box</h4>
				<p>
					An online tool for sharing your ideas for the council of Intertots Trillingual School.
				</p>
			</div>
			<div>
				<p>Made by <a href="https://bento.me/patato">Patato</a></p>
			</div>

			<div>
				<a href="/about">About</a>
			</div>

			<div><a href="https://github.com/patatobit/its-box">Source Code</a></div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: #212431;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		min-height: 0;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 2rem;
		padding: 1rem;
		color: white;

		div {
			min-width: 10rem;
			flex: 1;
		}

		a {
			color: white;
		}
	}
</style>
