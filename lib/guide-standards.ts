export type GuideStandard={
  id:string;
  label:string;
  description:string;
};

/**
 * Mandatory editorial requirements for TechPulse AI Guides. A guide should
 * move a reader from prerequisites to a verified working outcome rather than
 * merely explain the topic.
 */
export const guideStandards:GuideStandard[]=[
  {id:"outcome",label:"Clear outcome",description:"State exactly what the reader will have working by the end."},
  {id:"prerequisites",label:"Prerequisites",description:"List accounts, hardware, software, permissions, files and knowledge needed before step one."},
  {id:"steps",label:"Numbered procedure",description:"Use complete sequential steps with exact commands, settings, paths or actions where applicable."},
  {id:"expected",label:"Expected result",description:"Tell the reader what they should see after important steps so they can confirm progress."},
  {id:"verification",label:"Final verification",description:"Provide a concrete test proving the setup or workflow works end to end."},
  {id:"troubleshooting",label:"Troubleshooting",description:"Cover common failure modes, likely causes and specific fixes."},
  {id:"safety",label:"Safety and privacy",description:"Call out security, privacy, backup, permission or cost risks when relevant."},
  {id:"next",label:"Next steps",description:"Explain sensible improvements or advanced follow-on actions after the core outcome works."},
];

export const guideDefinition="A complete, reproducible tutorial that takes a reader from prerequisites through execution, verification and troubleshooting to a working outcome.";
