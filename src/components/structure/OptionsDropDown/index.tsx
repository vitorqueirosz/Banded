import { UsersMusician } from 'useCases';
import { Add, UserChip } from 'components/structure';
import { useMembersContext } from 'contexts';
import * as S from './OptionsDropDown.styles';

export type OptionsDropDownProps = {
 handleDropDown: () => void;
}

export const OptionsDropDown = ({ handleDropDown }: OptionsDropDownProps) => {
  const {
    members,
    setSelectedMembers,
    setReset,
    selectedMembers,
    setError,
    setShowDropdown,
  } = useMembersContext();

  const handleSelectMember = (data: UsersMusician) => {
    if (!selectedMembers.some(({ id }) => id === data.id)) {
      setSelectedMembers(prevState => [...prevState, data]);
      setError('');
    } else {
      setError('Membro ja adicionado');
    }
    setReset(true);
  };

  return (
    <>
      <Add
        title="Adicionar membro"
        handleAdd={handleDropDown}
        handleClose={() => setShowDropdown(false)}
        hasClose
      />
      <S.MembersList>
        {members?.map(({ id, name, avatar, instrument }, index) => (
          <S.Option
            onClick={() => handleSelectMember(members[index])}
            key={id}
          >
            <UserChip
              avatar={avatar}
              name={name}
              size="small"
              description={instrument}
              instrument={instrument}
            />
          </S.Option>
        ))}
      </S.MembersList>
      {!members.length && (
      <S.Option hasPadding>
        <span>Nenhum resultado encontrado</span>
      </S.Option>
      )}
    </>
  );
};
