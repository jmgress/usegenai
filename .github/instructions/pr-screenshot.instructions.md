---
description: "Use whenever Copilot is assigned an issue and implements it, creates or updates the resulting pull request, or addresses PR review comments. Requires capturing and attaching screenshot evidence to the PR."
---

# Issue-to-PR Screenshot Evidence

Whenever Copilot is assigned an issue and works on it, capture screenshot evidence of the completed result and attach it to the pull request Copilot creates or updates. Follow the same requirement when addressing review comments or making other updates to an existing PR.

- After the changes are implemented and validated, run the affected application or workflow and capture at least one screenshot showing the updated result.
- Choose a screenshot that clearly demonstrates the changed behavior. For user-interface changes, capture the affected screen at a useful viewport size; include mobile too when responsive behavior changed.
- Attach the screenshot directly to the pull request as an inline image in its description or a PR comment. Use the available GitHub integration or upload flow. A local screenshot path or an unrendered link does not count as attaching it.
- Make sure the image contains no secrets, credentials, private customer data, or unrelated personal information. Redact sensitive content before uploading.
- If the change has no visible application result, capture the most relevant verifiable outcome, such as the focused test result or updated rendered artifact, and explain what it demonstrates.
- Do not claim the screenshot was attached unless it is visible on the pull request. If the application cannot be run, capture is unavailable, or upload is blocked, state the specific limitation and what remains for the user to do.
- In the completion summary, identify what the screenshot shows and where it was attached.