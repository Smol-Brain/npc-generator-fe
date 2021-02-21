import { ICharacter } from 'types'

const random = (length: number) => Math.floor(Math.random() * length)
const removeDuplicates = (list: string[]) => {
    return list.filter((value, index, self) => self.indexOf(value) === index)
}
const getRandomItem = (list: string[]) => list[random(list.length)]
const getRandomList = (list: string[]) => {
    const newListLength = random(list.length)
    const currentRandomList: string[] = []

    for (let i = 0; i < newListLength; i++) {
        currentRandomList[i] = list[random(list.length)]
    }

    return removeDuplicates(currentRandomList)
}

const firstNames: string[] = [
    'Severianus',
    'Fólki',
    'Kára',
    'Ampelius',
    'Valerianus',
]
const lastNames: string[] = [
    'Petronia',
    'Nanna',
    'Parthalán',
    'Pandora',
    'Heinrich',
]
const identites: { gender: string; pronouns: string }[] = [
    { gender: 'Male', pronouns: 'He/Him' },
    { gender: 'Female', pronouns: 'She/Her' },
    { gender: 'Non-binary', pronouns: 'They/Them' },
]
const heights: string[] = ['Tall', 'Short', 'Average']
const hooks: string[] = [
    'Owns a dog',
    'Owes money',
    'Hates Elves',
    'Wants a teakettle',
]
const jobs: string[] = ['Unemployed', 'Begger', 'Bodyguard', 'Merchant']
const languages: string[] = ['Common', 'Orc', 'Elvish', 'Dwarfish']
const lifeStage: string[] = ['Young Adult', 'Adult', 'Elderly', 'Ancient']
const posTraits: string[] = ['Agreeable', 'Decent', 'Scholarly', 'Trusting']
const neutralTraits: string[] = ['Aggressive', 'Big-thinking', 'Soft', 'Proud']
const negTraits: string[] = ['Aloof', 'Brutal', 'Dull', 'Frightening']
const race: string[] = ['Human', 'Half-Orc', 'Elf', 'Dwarf']
const wealth: string[] = ['Poor', 'Average', 'Rich']

const getFirst = () => getRandomItem(firstNames)
const getIdentity = () => identites[random(identites.length)]
const getLast = () => getRandomItem(lastNames)
const getHeight = () => getRandomItem(heights)
const getQuirk = () => getRandomItem(hooks)
const getJob = () => getRandomItem(jobs)
const getLanguages = () => getRandomList(languages)
const getLifeState = () => getRandomItem(lifeStage)
const getNegativeTraits = () => getRandomList(negTraits)
const getNeutralTraits = () => getRandomList(neutralTraits)
const getPositiveTraits = () => getRandomList(posTraits)
const getRace = () => getRandomItem(race)
const getWealth = () => getRandomItem(wealth)

export const characterMock: ICharacter = {
    firstName: getFirst(),
    gender: getIdentity().gender,
    height: getHeight(),
    quirk: getQuirk(),
    job: getJob(),
    languages: getLanguages(),
    lastName: getLast(),
    lifeStage: getLifeState(),
    negativeTraits: getNegativeTraits(),
    neutralTraits: getNeutralTraits(),
    positiveTraits: getPositiveTraits(),
    pronouns: getIdentity().pronouns,
    race: getRace(),
    wealth: getWealth(),
}

export const generateMockNpc = (): ICharacter => {
    const identity = getIdentity()

    return {
        firstName: getFirst(),
        gender: identity.gender,
        height: getHeight(),
        quirk: getQuirk(),
        job: getJob(),
        languages: getLanguages(),
        lastName: getLast(),
        lifeStage: getLifeState(),
        negativeTraits: getNegativeTraits(),
        neutralTraits: getNeutralTraits(),
        positiveTraits: getPositiveTraits(),
        pronouns: identity.pronouns,
        race: getRace(),
        wealth: getWealth(),
    }
}
