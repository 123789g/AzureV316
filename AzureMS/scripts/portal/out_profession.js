


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : �����������

	��Ż ���� : ����������� ������


*/


function enter(pi) {
    pi.playPortalSE();
    try {
        pi.warp(pi.getSavedMapId(), "profession");
    } catch (e) {
        pi.warp(pi.getSavedMapId());
    }
    return true;
}
