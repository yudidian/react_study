import voteActions from "@/views/store/actions/voteActions";

import personActions from "@/views/store/actions/personActions";
import taskActions from "@/views/store/actions/taskActions";

const actions = {
  vote: voteActions,
  person: personActions,
  task: taskActions
}

export default actions
