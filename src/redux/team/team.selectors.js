import { createSelector } from "reselect";

const selectTeam = state => state.team;

export const selectTeamMember = createSelector(
  [selectTeam],
  team => team.teamMembers
);
