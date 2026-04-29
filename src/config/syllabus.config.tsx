import React from 'react'
import { BookOpen, Hammer, Rocket, Brain } from 'lucide-react'

// Recap Slides for Block 1
import RecapWelcomeSlide from '../components/slides/recap/RecapWelcomeSlide'
import RecapFoundationSlide from '../components/slides/recap/RecapFoundationSlide'
import RecapEcosystemSlide from '../components/slides/recap/RecapEcosystemSlide'
import RecapPromptingSlide from '../components/slides/recap/RecapPromptingSlide'
import RecapAppliedAISlide from '../components/slides/recap/RecapAppliedAISlide'
import RecapImageVsCodeSlide from '../components/slides/recap/RecapImageVsCodeSlide'
import RecapChallengeASlide from '../components/slides/recap/RecapChallengeASlide'
import RecapChallengeBSlide from '../components/slides/recap/RecapChallengeBSlide'
import RecapReflectionSlide from '../components/slides/recap/RecapReflectionSlide'
import DesignSystemIntroSlide from '../components/slides/DesignSystemIntroSlide'
import ServiceBlueprintSlide from '../components/slides/ServiceBlueprintSlide'

import DesignSystemSlide from '../components/slides/DesignSystemSlide'
import DesignSystemReferenceSlide from '../components/slides/DesignSystemReferenceSlide'
import TokenDNASlide from '../components/slides/TokenDNASlide'
import SystemW3CDTCGSlide from '../components/slides/SystemW3CDTCGSlide'
import DataFormatJsonSlide from '../components/slides/DataFormatJsonSlide'
import DataFormatMarkdownSlide from '../components/slides/DataFormatMarkdownSlide'
import StitchDesignMdSlide from '../components/slides/StitchDesignMdSlide'
import DesignMdFormatSlide from '../components/slides/DesignMdFormatSlide'
import AgentsMdSlide from '../components/slides/AgentsMdSlide'
import MCPSlide from '../components/slides/MCPSlide'
import StitchVsMakeSlide from '../components/slides/StitchVsMakeSlide'
import StylePromptingSlide from '../components/slides/StylePromptingSlide'
import DivergenceSlide from '../components/slides/DivergenceSlide'
import PromptTacticsSlide from '../components/slides/PromptTacticsSlide'
import AgentSkillsSlide from '../components/slides/AgentSkillsSlide'
import DashboardDefinitionSlide from '../components/slides/DashboardDefinitionSlide'
import DashboardInspirationSlide from '../components/slides/DashboardInspirationSlide'
import DataVizBasicsSlide from '../components/slides/DataVizBasicsSlide'
import DashboardPatternsSlide from '../components/slides/DashboardPatternsSlide'
import DashboardAIDesignSlide from '../components/slides/DashboardAIDesignSlide'
import ChallengeScenariosSlide from '../components/slides/ChallengeScenariosSlide'
import ChallengeOutcomeSlide from '../components/slides/ChallengeOutcomeSlide'
import ChallengeWorkflowSlide from '../components/slides/ChallengeWorkflowSlide'
import ChallengeAssessmentSlide from '../components/slides/ChallengeAssessmentSlide'
import UXArchitectRoleSlide from '../components/slides/UXArchitectRoleSlide'
import FlowNotationSlide from '../components/slides/FlowNotationSlide'
import FigJamAIDiagramsSlide from '../components/slides/FigJamAIDiagramsSlide'
import MermaidNotationSlide from '../components/slides/MermaidNotationSlide'
import WhimsicalSlide from '../components/slides/WhimsicalSlide'

import FlowTypesSlide from '../components/slides/FlowTypesSlide'
import IADesignSlide from '../components/slides/IADesignSlide'
import RelumeSitemapSlide from '../components/slides/RelumeSitemapSlide'
import MobbinSlide from '../components/slides/MobbinSlide'


import MakerVsProStackSlide from '../components/slides/MakerVsProStackSlide'
import IDESlide from '../components/slides/IDESlide'
import TerminalSlide from '../components/slides/TerminalSlide'
import GitHubSlide from '../components/slides/GitHubSlide'
import PublishingSlide from '../components/slides/PublishingSlide'
import APIsSlide from '../components/slides/APIsSlide'
import ApiExamplesSlide from '../components/slides/ApiExamplesSlide'
import ApiConnectionSlide from '../components/slides/ApiConnectionSlide'
import ChallengeDScenariosSlide from '../components/slides/ChallengeDScenariosSlide'
import ChallengeDIntroSlide from '../components/slides/ChallengeDIntroSlide'
import ChallengeDOutcomeSlide from '../components/slides/ChallengeDOutcomeSlide'
import ChallengeDAssessmentSlide from '../components/slides/ChallengeDAssessmentSlide'
import ChallengeE1IntroSlide from '../components/slides/ChallengeE1IntroSlide'
import ChallengeE1ScenariosSlide from '../components/slides/ChallengeE1ScenariosSlide'
import ChallengeE1PrototypeSlide from '../components/slides/ChallengeE1PrototypeSlide'
import ChallengeE1VisionSlide from '../components/slides/ChallengeE1VisionSlide'
import ChallengeE1WorkflowSlide from '../components/slides/ChallengeE1WorkflowSlide'
import ChallengeE1OutcomeSlide from '../components/slides/ChallengeE1OutcomeSlide'
import ChallengeE1AssessmentSlide from '../components/slides/ChallengeE1AssessmentSlide'
import ChallengeE2Slide from '../components/slides/ChallengeE2Slide'
import VibeCodingInspirationSlide from '../components/slides/VibeCodingInspirationSlide'
import PIMIntroSlide from '../components/slides/PIMIntroSlide'
import LocalMarkdownSlide from '../components/slides/LocalMarkdownSlide'
import ObsidianToolSlide from '../components/slides/ObsidianToolSlide'
import WisprFlowToolSlide from '../components/slides/WisprFlowToolSlide'
import ObsidianAIAgentsSlide from '../components/slides/ObsidianAIAgentsSlide'
import Part2IntroSlide from '../components/slides/Part2IntroSlide'
import StackReactViteSlide from '../components/slides/StackReactViteSlide'
import StackTailwindSlide from '../components/slides/StackTailwindSlide'
import StackShadcnSlide from '../components/slides/StackShadcnSlide'
import StackTypeScriptSlide from '../components/slides/StackTypeScriptSlide'
import StackFramerMotionSlide from '../components/slides/StackFramerMotionSlide'
import StackLocalServerSlide from '../components/slides/StackLocalServerSlide'
import {
  exportRegistry,
  getSlideExportMeta,
  readyExportRegistry,
  type SlideExportMeta,
} from './exportRegistry'

export interface BaseSlideData {
  id: string
  title: string
  component: React.ReactNode
}

export interface SlideData extends BaseSlideData, SlideExportMeta {}

export interface CategoryGroup {
  id: string
  title: string
  icon: React.ReactNode
  slides: SlideData[]
}

export interface DaySchedule {
  day: string
  groups: CategoryGroup[]
}

interface CategoryGroupInput {
  id: string
  title: string
  icon: React.ReactNode
  slides: BaseSlideData[]
}

interface DayScheduleInput {
  day: string
  groups: CategoryGroupInput[]
}

const rawSchedule: DayScheduleInput[] = [
  {
    day: "System zu Screen", // Changed from "Tag 1: System zu Screen"
    groups: [
      {
        id: "sys-intro", title: "Intro & Rückblick", icon: <BookOpen className="w-[18px] h-[18px]" />,
        slides: [
          { id: 's03-open1', title: 'Willkommen', component: <RecapWelcomeSlide /> },
          { id: 's03-open2', title: 'Modelle', component: <RecapFoundationSlide /> },
          { id: 's03-open3', title: 'LLMs & Agenten', component: <RecapEcosystemSlide /> },
          { id: 's03-open4', title: 'AI-Native Apps', component: <RecapAppliedAISlide /> },
          { id: 's03-open5', title: 'KI im UX Lifecycle', component: <RecapPromptingSlide /> },
          { id: 's03-open6', title: 'Image vs. Code', component: <RecapImageVsCodeSlide /> },
          { id: 's03-open7', title: 'Review Challenge A', component: <RecapChallengeASlide /> },
          { id: 's03-open8', title: 'Review Challenge B', component: <RecapChallengeBSlide /> },
          { id: 's03-open9', title: 'Reflexion', component: <RecapReflectionSlide /> }
        ]
      },
      {
        id: "sys-design", title: "Design Systeme", icon: <BookOpen className="w-[18px] h-[18px]" />,
        slides: [
          { id: 's03-sys-intro1', title: 'Grundlagen', component: <DesignSystemIntroSlide /> },
          { id: 's03-sys', title: 'Anatomie', component: <DesignSystemSlide /> },
          { id: 's03-sys-ref', title: 'Referenzsysteme', component: <DesignSystemReferenceSlide /> },
          { id: 's03-token', title: 'Token-DNA', component: <TokenDNASlide /> },
          { id: 's03-dtcg', title: 'W3C & Token Standard', component: <SystemW3CDTCGSlide /> },
          { id: 's03-data-json', title: 'Format: JSON', component: <DataFormatJsonSlide /> },
          { id: 's03-data-md', title: 'Format: Markdown', component: <DataFormatMarkdownSlide /> },
          { id: 's03-design-md', title: 'Google Stitch', component: <StitchDesignMdSlide /> },
          { id: 's03-design-fmt', title: 'Manifest: DESIGN.md', component: <DesignMdFormatSlide /> },
          { id: 's03-agents-md', title: 'Manifest: AGENTS.md', component: <AgentsMdSlide /> },
          { id: 's03-mcp', title: 'Protokoll: MCP', component: <MCPSlide /> },
          { id: 's03-stitch-make', title: 'Figma vs. Stitch', component: <StitchVsMakeSlide /> },
          { id: 's03-style', title: 'Aesthetic Fixation', component: <StylePromptingSlide /> },
          { id: 's03-div', title: 'Visuelle Divergenz', component: <DivergenceSlide /> },
          { id: 's03-prompting', title: 'Agent Prompting', component: <PromptTacticsSlide /> },
          { id: 's03-skills', title: 'Agent Skills', component: <AgentSkillsSlide /> }
        ]
      },
      {
        id: "sys-chal-c", title: "Challenge C", icon: <Hammer className="w-[18px] h-[18px]" />,
        slides: [
          { id: 's03-c-scen', title: 'Aufgabenstellung', component: <ChallengeScenariosSlide /> },
          { id: 's03-c-out', title: 'Outcome', component: <ChallengeOutcomeSlide /> },
          { id: 's03-c-work', title: 'Methodik & Pipeline', component: <ChallengeWorkflowSlide /> },
          { id: 's03-c-assess', title: 'Bewertungsschema', component: <ChallengeAssessmentSlide /> }
        ]
      },
      {
        id: "sys-dash-input", title: "Dashboard Design", icon: <BookOpen className="w-[18px] h-[18px]" />,
        slides: [
          { id: 's03-dash-def', title: 'Was ist ein Dashboard?', component: <DashboardDefinitionSlide /> },
          { id: 's03-dash-insp', title: 'Inspiration & Domänen', component: <DashboardInspirationSlide /> },
          { id: 's03-dash-viz', title: 'Data Viz Grundlagen', component: <DataVizBasicsSlide /> },
          { id: 's03-patterns', title: 'Bento Grid & Patterns', component: <DashboardPatternsSlide /> },
          { id: 's03-dash-ai', title: 'KI-Dashboards', component: <DashboardAIDesignSlide /> }
        ]
      },
      {
        id: "sys-flow-input", title: "User Flows & IA", icon: <BookOpen className="w-[18px] h-[18px]" />,
        slides: [
          { id: 's03-flow-intro', title: 'System-Architekt', component: <UXArchitectRoleSlide /> },
          { id: 's03-flow-2', title: 'Task vs. Journey', component: <FlowTypesSlide /> },
          { id: 's03-flow-1', title: 'Flowchart Notation', component: <FlowNotationSlide /> },
          { id: 's03-flow-mermaid', title: 'Format: Mermaid.js', component: <MermaidNotationSlide /> },
          { id: 's03-flow-figjam-ai', title: 'Tool: FigJam AI', component: <FigJamAIDiagramsSlide /> },
          { id: 's03-flow-whimsical', title: 'Tool: Whimsical', component: <WhimsicalSlide /> },
          { id: 's03-flow-3', title: 'IA & Sitemaps', component: <IADesignSlide /> },
          { id: 's03-flow-relume', title: 'Tool: Relume', component: <RelumeSitemapSlide /> },
          { id: 's03-flow-mobbin', title: 'Pattern Library: Mobbin', component: <MobbinSlide /> },
          { id: 's03-flow-blueprint', title: 'Service Blueprints & UML', component: <ServiceBlueprintSlide /> },

        ]
      },
      {
        id: "sys-flow-chal", title: "Challenge D", icon: <Hammer className="w-[18px] h-[18px]" />,
        slides: [
          { 
            id: 's03-d-intro', title: 'Aufgabenstellung', 
            component: <ChallengeDIntroSlide /> 
          },
          { 
            id: 's03-d-scen', title: 'Use Case Scenarios', 
            component: <ChallengeDScenariosSlide /> 
          },
          { 
            id: 's03-d-out', title: 'Outcome', 
            component: <ChallengeDOutcomeSlide /> 
          },
          { 
            id: 's03-d-assess', title: 'Bewertungsschema', 
            component: <ChallengeDAssessmentSlide /> 
          }
        ]
      }
    ]
  },
  {
    day: "Prototyp zu Produkt", // Changed from "Tag 2: Prototyp zu Produkt"
    groups: [
      {
        id: "proto-tech1", title: "Tech für Designer", icon: <BookOpen className="w-[18px] h-[18px]" />,
        slides: [
          { id: 's04-mvp', title: 'Maker vs. Pro Stack', component: <MakerVsProStackSlide /> },
          { id: 's04-ide-core', title: 'Die IDE', component: <IDESlide /> },
          { id: 's04-term', title: 'Das Terminal', component: <TerminalSlide /> },
          { id: 's04-github', title: 'GitHub', component: <GitHubSlide /> },
          { id: 's04-publish', title: 'Publishing', component: <PublishingSlide /> },
          { id: 's04-api-intro', title: 'APIs (Classic vs AI)', component: <APIsSlide /> },
          { id: 's04-api-examples', title: 'API Inspiration', component: <ApiExamplesSlide /> },
          { id: 's04-api-connection', title: 'API Anbindung & Sicherheit', component: <ApiConnectionSlide /> }
        ]
      },
      {
        id: "proto-chalD2", title: "Challenge E.1", icon: <Hammer className="w-[18px] h-[18px]" />,
        slides: [
          { 
            id: 's04-chalE1-intro', title: 'Aufgabenstellung', 
            component: <ChallengeE1IntroSlide />
          },
          { 
            id: 's04-chalE1-scene', title: 'AI Showcase', 
            component: <ChallengeE1ScenariosSlide />
          },
          {
            id: 's04-chalE1-proto', title: 'Der KI App Prototyp',
            component: <ChallengeE1PrototypeSlide />
          },
          {
            id: 's04-chalE1-vision', title: 'Die VISION.md',
            component: <ChallengeE1VisionSlide />
          },
          { 
            id: 's04-chalE1-work', title: 'Vibe Coding Taktiken', 
            component: <ChallengeE1WorkflowSlide />
          },
          { 
            id: 's04-chalE1-out', title: 'Outcome', 
            component: <ChallengeE1OutcomeSlide />
          },
          { 
            id: 's04-chalE1-assess', title: 'Evaluationskriterien', 
            component: <ChallengeE1AssessmentSlide />
          }
        ]
      },
      {
        id: "proto-tech2", title: "Web Dev", icon: <Rocket className="w-[18px] h-[18px]" />,
        slides: [
          { id: 's04-intro', title: 'Intro: The Modern Stack', component: <Part2IntroSlide /> },
          { id: 's04-react', title: 'React 19 Core', component: <StackReactViteSlide /> },
          { id: 's04-tailwind', title: 'Tailwind CSS', component: <StackTailwindSlide /> },
          { id: 's04-shadcn', title: 'shadcn/ui (AI Secret)', component: <StackShadcnSlide /> },
          { id: 's04-ts', title: 'TypeScript', component: <StackTypeScriptSlide /> },
          { id: 's04-framer', title: 'Framer Motion', component: <StackFramerMotionSlide /> },
          { id: 's04-server', title: 'Vite (Server & Build)', component: <StackLocalServerSlide /> },
          { id: 's04-vibe-tools', title: 'Komponenten & UI-Inspiration', component: <VibeCodingInspirationSlide /> }
        ]
      },
      {
        id: "proto-chalE", title: "Challenge E.2", icon: <Hammer className="w-[18px] h-[18px]" />,
        slides: [
          { 
            id: 's04-chalE', title: 'Optional: Projekt Live schalten', 
            component: <ChallengeE2Slide />
          }
        ]
      },
      {
        id: "proto-localnotes", title: "Zusatz: PIM", icon: <Brain className="w-[18px] h-[18px]" />,
        slides: [
          { id: 's04-pim-intro', title: 'Personal Information Management', component: <PIMIntroSlide /> },
          { id: 's04-local-markdown', title: 'Data Sovereignty', component: <LocalMarkdownSlide /> },
          { id: 's04-obsidian-tool', title: 'Tool: Obsidian', component: <ObsidianToolSlide /> },
          { id: 's04-wispr-flow', title: 'Tool: Wispr Flow', component: <WisprFlowToolSlide /> },
          { id: 's04-obsidian-agents', title: 'Obsidian × AI Agents', component: <ObsidianAIAgentsSlide /> }
        ]
      }
    ]
  }
]

export const schedule: DaySchedule[] = rawSchedule.map((day) => ({
  ...day,
  groups: day.groups.map((group) => ({
    ...group,
    slides: group.slides.map((slide) => ({
      ...slide,
      ...getSlideExportMeta(slide.id, slide.title),
    })),
  })),
}))

// flat map to find groups easily
export const allGroups = schedule.flatMap(d => d.groups)
export { exportRegistry, readyExportRegistry }
